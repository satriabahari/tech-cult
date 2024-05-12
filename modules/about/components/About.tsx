import Introduction from "./Introduction";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";

const About = () => {
  return (
    <Container
      id="tentang"
      data-aos="fade-up"
      className="mb-12 lg:mb-0 h-full min-h-screen"
    >
      <PageHeading title="Tentang" />
      <Introduction />
    </Container>
  );
};

export default About;
