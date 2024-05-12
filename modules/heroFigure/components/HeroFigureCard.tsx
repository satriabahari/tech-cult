"use client";

import Image from "next/image";

import HeroFigureDetail from "./HeroFigureDetail";

import Card from "@/common/components/elements/Card";
import { useDetailPopUpHeroFigure } from "@/common/stores/details";
import { HeroFigureProps } from "@/common/types/heroFigure";

const HeroFigureCard = ({
  id,
  name,
  date_of_birth,
  place_of_birth,
  date_of_death,
  place_of_death,
  description,
  image,
}: HeroFigureProps) => {
  const { isOpen, setIsOpen, setId, currentId } = useDetailPopUpHeroFigure();

  const handleClick = (id: number) => {
    setId(id);
    setIsOpen(true);
  };
  return (
    <Card
      className="group cursor-pointer rounded-lg border-2 border-neutral-300 bg-neutral-100 text-center shadow-lg dark:border-neutral-600 dark:bg-neutral-800"
      onClick={() => handleClick(id)}
    >
      <div className="relative h-28 w-full rounded-t-lg bg-red-500">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="absolute -bottom-1/2 right-1/2 h-36 w-36 translate-x-1/2 overflow-hidden rounded-full object-cover shadow-2xl transition duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="mb-4 mt-20 text-xl font-medium transition duration-300 group-hover:text-red-500">
        {name}
      </h2>

      {currentId === id && (
        <HeroFigureDetail
          id={id}
          name={name}
          description={description}
          date_of_birth={date_of_birth}
          place_of_birth={place_of_birth}
          date_of_death={date_of_death}
          place_of_death={place_of_death}
          image={image}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </Card>
  );
};

export default HeroFigureCard;
