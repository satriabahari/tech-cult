"use client";

import Image from "next/image";

import EventDetail from "./EventDetail";

import Card from "@/common/components/elements/Card";
import { useDetailPopUpEvent } from "@/common/stores/details";
import { EventProps } from "@/common/types/event";

const EventCard = ({ id, title, description, image }: EventProps) => {
  const { isOpen, setIsOpen, setId, currentId } = useDetailPopUpEvent();

  const handleClick = (id: number) => {
    setId(id);
    setIsOpen(true);
  };
  return (
    <Card className="border-2 border-neutral-300 transition duration-300 hover:scale-105 dark:border-neutral-600">
      <div
        className="relative hover:cursor-pointer"
        onClick={() => handleClick(id)}
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="h-52 w-full rounded-xl object-cover"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-xl bg-neutral-900 px-8 text-center opacity-0 transition-opacity duration-300 hover:opacity-80">
          <h3 className="text-2xl text-neutral-50">{title}</h3>
        </div>
      </div>

      {currentId === id && (
        <EventDetail
          id={id}
          title={title}
          description={description}
          image={image}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </Card>
  );
};

export default EventCard;
