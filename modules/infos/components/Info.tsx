import InfoList from "./InfoList";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";

const Info = () => {
  return (
    <Container id="info" data-aos="fade-up" className="mb-16">
      <PageHeading title="Info"/>
      <InfoList/>
    </Container>
  )
}

export default Info;
