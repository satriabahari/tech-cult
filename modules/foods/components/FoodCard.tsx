"use client";

import Card from "@/common/components/elements/Card";
import { useDetailPopUpFood } from "@/common/stores/details";
import Image from "next/image";
import React from "react";
import FoodDetail from "./FoodDetail";

interface FoodCardProps {
  id: number;
  name: string;
  description: string;
  origin: string;
  image: string;
  ingredients: string[];
  instructions: string;
}

const FoodCard = ({
  id,
  name,
  description,
  origin,
  image,
  ingredients,
  instructions,
}: FoodCardProps) => {
  const { isOpen, setIsOpen, setId, currentId } = useDetailPopUpFood();

  const handleClick = (id: number) => {
    setId(id);
    setIsOpen(true);
  };
  const trimmedDescription =
    description.slice(0, 70) + (description.length > 70 ? "..." : "");
  return (
    <Card
      className="group flex gap-x-4 border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-50 transition duration-300 hover:scale-105 dark:border-neutral-600 dark:from-neutral-700 dark:to-neutral-900"
      onClick={() => handleClick(id)}
    >
      <Image
        src={image}
        width={450}
        height={450}
        alt={name}
        className="h-32 w-full overflow-hidden rounded-lg  object-cover"
      />
      <div className="p-2 ">
        <h3 className="font-semibold text-neutral-900 transition duration-300 group-hover:text-red-500 dark:text-neutral-50">
          {name}
        </h3>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          {trimmedDescription}
        </p>
      </div>

      {currentId === id && (
        <FoodDetail
          id={id}
          name={name}
          description={description}
          image={image}
          origin={origin}
          ingredients={ingredients}
          instructions={instructions}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </Card>
  );
};

export default FoodCard;
