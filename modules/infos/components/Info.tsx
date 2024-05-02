import Container from "@/common/components/elements/Container";
import InfoList from "./InfoList";
import PageHeading from "@/common/components/elements/Heading";

export default function Info() {
  return (
    <Container id="info" data-aos="fade-up" className="mb-16">
      <PageHeading title="Info"/>
      <InfoList/>
    </Container>
  )
}
