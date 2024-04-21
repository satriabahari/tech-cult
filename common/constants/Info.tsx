import {
  BiHomeCircle as HomeIcon,
  BiUser as AboutIcon,
  BiCollection as ProjectIcon,
  BiCategory as DashboardIcon,
  BiBook as ContactIcon,
} from "react-icons/bi";

import { InfoProps } from "../types/info";

const size = 24;

export const INFO: InfoProps[] = [
  {
    title: "34 Provinsi",
    description: "Indonesia mempunyai 34 provinsi saat ini.",
    icon: <HomeIcon size={size} />,
    isShow: true,
  },
  {
    title: "200+ Pulau",
    description: "Indonesia mempunyai 200 lebih pulau saat ini.",
    icon: <AboutIcon size={size} />,
    isShow: true,
  },
  {
    title: "34 Provinsi",
    description: "Indonesia mempunyai 34 provinsi saat ini.",
    icon: <ProjectIcon size={size} />,
    isShow: true,
  },
];
