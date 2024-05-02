import { GiIsland as IslandIcon } from "react-icons/gi";
import {
  FaChartArea as ProvinceIcon,
  FaReadme as LocalLanguageIcon,
} from "react-icons/fa";

import { InfoProps } from "../types/info";

const size = 24;

export const INFO: InfoProps[] = [
  {
    title: "34 Provinsi",
    description:
      "Provinsi-provinsi ini terbagi di antara lima pulau besar (Jawa, Sumatra, Kalimantan, Sulawesi, dan Papua).",
    icon: <ProvinceIcon size={size} />,
    isShow: true,
  },
  {
    title: "17.000+ Pulau",
    description:
      "Indonesia terdiri dari lebih dari 17.000 pulau, yang terbesar adalah Pulau Kalimantan, Pulau Sumatra, Pulau Papua, dan Pulau Sulawesi.",
    icon: <IslandIcon size={size} />,
    isShow: true,
  },
  {
    title: "700+ Bahasa daerah",
    description:
      "terdapat lebih dari 700 bahasa daerah yang digunakan di seluruh kepulauan.",
    icon: <LocalLanguageIcon size={size} />,
    isShow: true,
  },
];
