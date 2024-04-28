import Container from "@/common/components/elements/Container";
import DestinationList from "./DestinationList";
import PageHeading from "@/common/components/elements/Heading";

export default function Destinations() {
  return (
    <Container id="destinasi" data-aos="fade-up" className="mb-12">
      <PageHeading title="Destinasi" />
      <DestinationList />
    </Container>
  );
}
