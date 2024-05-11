import HeroFigureCard from "./HeroFigureCard";

import { HERO_FIGURE } from "@/common/constants/heroFigure";

const HeroFigureList = () => {
  const filteredHeroFigure = HERO_FIGURE.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      {filteredHeroFigure.map((item, index) => (
        <HeroFigureCard key={index} {...item} />
      ))}
    </div>
  );
};

export default HeroFigureList;
