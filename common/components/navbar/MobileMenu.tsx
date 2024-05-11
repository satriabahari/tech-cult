import Menu from "./Menu";
import Breakline from "../elements/Breakline";

import { MENU_ITEMS } from "@/common/constants/menu";

const MobileMenu = () => {
  const filteredMenu = MENU_ITEMS.filter((menu) => menu?.isShow);
  return (
    <div className="h-screen">
      <Breakline />
      <Menu list={filteredMenu} />
    </div>
  );
};

export default MobileMenu;
