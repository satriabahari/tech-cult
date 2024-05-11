import MenuItem from "./MenuItem";

import { MenuItemProps } from "@/common/types/menu";

interface MenuProps {
  list: MenuItemProps[];
}

const Menu = ({ list }: MenuProps) => {
  return (
    <nav className="flex flex-col space-y-2 px-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      {list.map((item: MenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default Menu;
