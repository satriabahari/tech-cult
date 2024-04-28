import About from "@/modules/about";
import Contacts from "@/modules/contacts";
import Destinations from "@/modules/destinations";
import Events from "@/modules/events/components/Events";
import Home from "@/modules/home";
import Info from "@/modules/infos";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Info />
      <Destinations />
      <Events />
      <Contacts />
    </>
  );
}
