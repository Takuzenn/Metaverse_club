import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div>
      <About />
      <div className="absolute z-0 top-0 left-0 w-full h-full gradient-03" />
    </div>
    <div>
      <Explore />
      <GetStarted />
      <div className="w-full h-full gradient-01" />
      <WhatsNew />
    </div>
    <World />
    <div>
      <Insights />
      <div className="absolute z-0 top-0 left-0 w-full h-full gradient-05" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
