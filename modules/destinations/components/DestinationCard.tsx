import Card from "@/common/components/elements/Card";
import { DestinationProps } from "@/common/types/destination";
import Image from "next/image";

export default function DestinationCard({
  title,
  description,
  image,
}: DestinationProps) {
  return (
    <Card className="flex flex-col border">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="h-full w-full rounded-t-xl object-cover"
      />
      <div className="p-2 space-y-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm">{description}</p>
        <button className="rounded-full bg-red-500 text-neutral-50 px-4 py-1">Detail</button>
      </div>
    </Card>
  );
}
