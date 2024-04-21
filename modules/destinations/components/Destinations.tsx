import Container from "@/common/components/elements/Container";
import DestinationList from "./DestinationList";
import PageHeading from "@/common/components/elements/Heading";

export default function Destinations() {
  return (
    <Container>
      <PageHeading title="Destinations" />
      <DestinationList />
    </Container>
  );
}
