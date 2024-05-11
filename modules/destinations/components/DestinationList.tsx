import DestinationCard from "./DestinationCard";

import { DESTINATIONS } from "@/common/constants/destinations";

const DestinationList = () => {
  const filteredDestinations = DESTINATIONS.filter(
    (destination) => destination.isShow,
  );
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      {filteredDestinations.map((destination, index) => (
        <DestinationCard key={index} {...destination} />
      ))}
    </section>
  );
};

export default DestinationList;
