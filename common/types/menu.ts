export type MenuItemProps = {
  title: string;
  href: string;
  icon?: JSX.Element;
  isShow?: boolean;
  onClick?: () => void;
  className?: string;
};
