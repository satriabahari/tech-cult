import { DESTINATIONS } from "@/common/constants/destinations";
import DestinationCard from "./DestinationCard";

export default function DestinationList() {
  const filteredDestinations = DESTINATIONS.filter(
    (destination) => destination.isShow,
  );
  return (
    <section className="space-y-8">
      {filteredDestinations.map((destination, index) => (
        <DestinationCard key={index} {...destination} />
      ))}
    </section>
  );
}
