import "./App.css";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import Heroheader from "./components/sections/Heroheader";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Heroheader />
      <div className="snap-mandatory snap-y">
        <section className="snap-always snap-center">
          <AboutSection />
        </section>
        <section className="snap-always snap-center">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}

export default App;
