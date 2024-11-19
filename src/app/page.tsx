
import Hero from "./components/hero";
import Work from "./components/work";
import Whatido from "./components/whatido";
import Skills from "./components/skills";

import ContactForm from "./components/form";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Work/>
      <Whatido/>
      <Skills/>
      <ContactForm/>

    </div>
  );
}
