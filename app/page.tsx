import About from "@/modules/about";
import Destinations from "@/modules/destinations";
import Home from "@/modules/home";
import Info from "@/modules/info";
import Lombas from "@/modules/lombas";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Info />
      <Destinations />
      <Lombas />
    </>
  );
}
