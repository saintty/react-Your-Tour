import React from "react";
import Section from "./../../UI/section";
import { categories, cards } from "./data";
import CategoryList from "./CategoryList";
import CardList from "./CardList";

const Tours = () => {
  return (
    <Section title="Выбери свой тур" order="first" id="tour">
      <CategoryList categories={categories} />
      <CardList cards={cards} />
    </Section>
  );
};

export default Tours;
