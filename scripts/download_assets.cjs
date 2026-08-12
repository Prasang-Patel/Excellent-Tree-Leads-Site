const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

const logos = {
    'angels.jpg': '11JPKl2EyiiTuzqOWI3mRj1S-nixQse26',
    'dm.jpg': '1jTb1LAgOnm6cURkV2i7AQm3lwAb0ANHC',
    'hopkins.jpg': '1gcU7kxBiMrr6ra9a_mjhuHuyGa-9pFO9',
    'see-through.png': '1omCNRORrVQHoLvezlm7PBx5-798m8hzA',
    'we-care.jpg': '14CKZqLA1H0n2YKTcbd-hINU73iQKgK8L',
    'william.jpg': '1iNay0pjjiKlgpUtpSu9jTWzO-8fnkLgm'
};

const audio = {
    'emergency.mp3': '1GMgSgQ6hsxemk3ymzCWFCYnM9fd67Xy7',
    'clarence.mp3': '1uL0BHOJZF-57URiutPy8seQ-O7YH5Lf7',
    'jeff.mp3': '1MLmwOsVZnVx1kQI0giK3MSZ2auZWsqgt',
    'milledgeville.mp3': '1xarjkekdDkTnoACjtHjXcf5kMHmr8TgD',
    'patricia.mp3': '1A7Oh_qyR2Y0K5_LNW7rOxLqGvOfwWISg',
    'voicemail.mp3': '14PE-vsTag7b3qUSXbp8DTtWjX5ZN9uB3'
};

const publicDir = path.join(__dirname, '..', 'public');
const logosDir = path.join(publicDir, 'logos');
const recordingsDir = path.join(publicDir, 'recordings');

// Ensure directories exist
[logosDir, recordingsDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

function downloadFile(fileId, destPath) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
            return resolve();
        }

        const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
        
        function get(urlToFetch) {
            https.get(urlToFetch, (res) => {
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    get(res.headers.location.startsWith('http') ? res.headers.location : `https://drive.google.com${res.headers.location}`);
                } else if (res.statusCode === 200) {
                    const fileStream = fs.createWriteStream(destPath);
                    res.pipe(fileStream);
                    fileStream.on('finish', () => {
                        fileStream.close();
                        resolve();
                    });
                } else {
                    reject(new Error(`Failed to download ${fileId}. Status Code: ${res.statusCode}`));
                }
            }).on('error', (err) => {
                reject(err);
            });
        }
        
        get(url);
    });
}

function checkAudioType(filePath) {
    try {
        const out = execSync(`file "${filePath}"`).toString();
        if (out.includes('system multiplex') || out.includes('MPEG sequence')) {
            console.log(`Converting ${path.basename(filePath)} from MPEG system multiplex to pure MP3...`);
            const tempPath = filePath + '.tmp.mpeg';
            fs.renameSync(filePath, tempPath);
            execSync(`"${ffmpegPath}" -y -i "${tempPath}" -vn -ar 44100 -ac 2 -b:a 128k "${filePath}"`);
            fs.unlinkSync(tempPath);
        }
    } catch(e) {
        console.error("Warning: could not check or convert audio file", e.message);
    }
}

async function run() {
    console.log("Checking and downloading assets from Google Drive...");
    const promises = [];
    
    for (const [filename, id] of Object.entries(logos)) {
        promises.push(downloadFile(id, path.join(logosDir, filename)));
    }
    
    for (const [filename, id] of Object.entries(audio)) {
        promises.push(downloadFile(id, path.join(recordingsDir, filename)).then(() => {
            checkAudioType(path.join(recordingsDir, filename));
        }));
    }
    
    try {
        await Promise.all(promises);
        console.log("All assets are ready!");
    } catch (err) {
        console.error("Error downloading assets:", err);
        process.exit(1);
    }
}

run();
