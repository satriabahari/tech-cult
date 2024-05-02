import { DESTINATIONS } from "@/common/constants/destinations";
import DestinationCard from "./DestinationCard";

export default function DestinationList() {
  const filteredDestinations = DESTINATIONS.filter(
    (destination) => destination.isShow,
  );
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {filteredDestinations.map((destination, index) => (
        <DestinationCard key={index} {...destination} />
      ))}
    </section>
  );
}
