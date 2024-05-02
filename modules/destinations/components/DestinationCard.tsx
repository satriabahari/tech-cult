import Card from "@/common/components/elements/Card";
import { DestinationProps } from "@/common/types/destination";
import Image from "next/image";
import { Si1Password, Si4Chan, SiAcm } from "react-icons/si";

interface ItemComponentProps {
  title?: string;
  icon?: JSX.Element;
  className?: string;
}

export default function DestinationCard({
  title,
  description,
  image,
  by,
  location,
  length_journey,
  icon,
}: DestinationProps) {
  const trimmedDescription =
    description.slice(0, 70) + (description.length > 90 ? "..." : "");

  const iconSize = 13;

  const ItemComponent = ({ title, icon, className }: ItemComponentProps) => (
    <div className={`flex items-center gap-x-2 ${className}`}>
      {icon}
      <p className="text-xs">{title}</p>
    </div>
  );

  return (
    <Card className="flex flex-col overflow-hidden border-2 border-neutral-300 dark:border-neutral-600 transition duration-300 hover:scale-105 bg-gradient-to-b from-neutral-200 to-neutral-50 dark:from-neutral-700 dark:to-neutral-900">
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
          icon={<Si1Password size={iconSize} />}
          className="text-red-500"
        />
        <ItemComponent title={location} icon={<Si4Chan size={iconSize} />} />
        <ItemComponent
          title={`${length_journey} perjalanan`}
          icon={<SiAcm size={iconSize} />}
        />

        {/* <p className="text-sm">{trimmedDescription}</p> */}
        {/* <button className="rounded-full bg-red-500 px-4 py-1 text-neutral-50">
          Detail
        </button> */}
      </div>
    </Card>
  );
}
