import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import JobCategories from "./components/JobCategories.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import ForEmployers from "./components/ForEmployers.jsx";
import ManpowerRequest from "./components/ManpowerRequest.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Industries from "./components/Industries.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="hazard-strip" aria-hidden="true" />
        <JobCategories />
        <HowItWorks />
        <ForEmployers />
        <ManpowerRequest />
        <WhyChooseUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
