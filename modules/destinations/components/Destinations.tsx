import DestinationList from "./DestinationList";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";

const Destinations = () => {
  return (
    <Container id="destinasi" data-aos="fade-up" className="mb-12">
      <PageHeading title="Destinasi" />
      <DestinationList />
    </Container>
  );
}

export default Destinations;
