import HeroFigureList from "./HeroFigureList";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";

const HeroFigure = () => {
  return (
    <Container id="tokoh" data-aos="fade-up" className="mb-16">
      <PageHeading title="Tokoh Pahlawan" />
      <HeroFigureList />
    </Container>
  );
};

export default HeroFigure;
