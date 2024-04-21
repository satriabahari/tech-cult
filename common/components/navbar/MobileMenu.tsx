import { MENU_ITEMS } from "@/common/constants/menu";
import Menu from "./Menu";
import Breakline from "../elements/Breakline";

export default function MobileMenu() {
  const filteredMenu = MENU_ITEMS.filter((menu) => menu?.isShow);
  return (
    <div className="h-screen">
      <Breakline/>
      <Menu list={filteredMenu} />
    </div>
  );
}
