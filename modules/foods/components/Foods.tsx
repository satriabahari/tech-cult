import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";
import React from "react";
import FoodList from "./FoodList";

const Foods = () => {
  return (
    <Container id="makanan" data-aos="fade-up" className="mb-12">
      <PageHeading title="Makanan" />
      <FoodList />
    </Container>
  );
};

export default Foods;
