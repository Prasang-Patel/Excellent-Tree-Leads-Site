/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Testimonial from './components/Testimonial';
import CallRecordings from './components/CallRecordings';
import LeadGallery from './components/LeadGallery';
import ComparisonTable from './components/ComparisonTable';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1611] font-sans selection:bg-[#a2e634] selection:text-[#0d1611] overflow-x-hidden">
      <Hero />
      <Ticker />
      <Testimonial />
      <LeadGallery />
      <CallRecordings />
      <ComparisonTable />
      <Process />
      <Pricing />
      <Guarantee />
      <Footer />
    </div>
  );
}
