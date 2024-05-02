import React from "react";
import HeroFigureCard from "./HeroFigureCard";
import { HERO_FIGURE } from "@/common/constants/heroFigure";

const HeroFigureList = () => {
  const filteredHeroFigure = HERO_FIGURE.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      {filteredHeroFigure.map((item, index) => (
        <div key={index}>
          <HeroFigureCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default HeroFigureList;
