import Card from "@/common/components/elements/Card";
import { HeroFigureProps } from "@/common/types/heroFigure";
import Image from "next/image";

const HeroFigureCard = ({
  name,
  date_of_birth,
  place_of_birth,
  date_of_death,
  place_of_death,
  description,
}: HeroFigureProps) => {
  return (
    <Card className="group relative rounded-lg bg-neutral-100 text-center shadow-lg dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 ">
      <div className="left-0 top-0 h-28 w-full rounded-t-lg bg-red-500" />
      <Image
        src={"/images/heroFigure/soekarno.webp"}
        alt={name}
        width={150}
        height={150}
        className="absolute left-0 top-8 rounded-full shadow-2xl transition duration-300 group-hover:scale-105"
      />
      <div className="flex h-auto flex-col justify-between space-y-4 p-4 ">
        <div className="mt-20 space-y-2">
          <h2 className="text-xl font-medium transition duration-300 group-hover:text-red-500">
            {name}
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-400">
            {description}
          </p>
        </div>
        <div className="rounded-lg border border-red-500 bg-neutral-50 p-2 text-xs text-neutral-900 dark:bg-neutral-600 dark:text-neutral-200">
          <p className="mb-2 font-bold">Tempat, tanggal lahir</p>
          <p className="mb-1">{place_of_birth}</p>
          <p>{date_of_birth}</p>
        </div>
        <div className="rounded-lg border border-red-500 bg-neutral-50 p-2 text-xs text-neutral-900 dark:bg-neutral-600 dark:text-neutral-200">
          <p className="mb-2 font-bold">Tempat, tanggal wafat</p>
          <p className="mb-1">{place_of_death}</p>
          <p>{date_of_death}</p>
        </div>
      </div>
    </Card>
  );
};

export default HeroFigureCard;
