"use client";

import Image from "next/image";
import { FaMapMarkerAlt as LocationIcon } from "react-icons/fa";
import { GiJourney as JourneyIcon } from "react-icons/gi";
import { SiCodementor as ByIcon } from "react-icons/si";

import DestinationDetail from "./DestinationDetail";

import Card from "@/common/components/elements/Card";
import { useDetailPopUpDestinations } from "@/common/stores/details";
import { DestinationProps } from "@/common/types/destination";

interface ItemComponentProps {
  title?: string;
  icon?: JSX.Element;
  className?: string;
}

export default function DestinationCard({
  id,
  title,
  description,
  image,
  by,
  location,
  length_journey,
}: DestinationProps) {
  const { isOpen, setIsOpen, setId, currentId } = useDetailPopUpDestinations();

  const iconSize = 13;

  const ItemComponent = ({ title, icon, className }: ItemComponentProps) => (
    <div className={`flex items-center gap-x-2 ${className}`}>
      {icon}
      <p className="text-xs">{title}</p>
    </div>
  );

  const handleClick = (id: number) => {
    setId(id);
    setIsOpen(true);
  };

  return (
    <Card className="flex flex-col justify-between overflow-hidden border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-50 transition duration-300 hover:scale-105 dark:border-neutral-600 dark:from-neutral-700 dark:to-neutral-900">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="h-40 w-full rounded-t-xl object-cover"
      />
      <div className="space-y-2 p-2">
        <h3 className="font-medium">{title}</h3>
        <ItemComponent
          title={`By ${by}`}
          icon={<ByIcon size={iconSize} />}
          className="text-red-500"
        />
        <ItemComponent
          title={location}
          icon={<LocationIcon size={iconSize} />}
        />
        <ItemComponent
          title={`${length_journey} perjalanan`}
          icon={<JourneyIcon size={iconSize} />}
        />

        <button
          className="w-full rounded-full bg-red-500 px-4 py-1 text-sm text-neutral-50 hover:bg-red-600"
          onClick={() => handleClick(id)}
        >
          Detail
        </button>

        {currentId === id && (
          <DestinationDetail
            id={id}
            title={title}
            description={description}
            image={image}
            by={by}
            location={location}
            length_journey={length_journey}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </Card>
  );
}
