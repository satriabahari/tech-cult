import EventList from "./EventList";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";

const Events = () => {
  return (
    <Container id="lomba" data-aos="fade-up" className="mb-16">
      <PageHeading title="Lomba" />
      <EventList />
    </Container>
  );
};

export default Events;
