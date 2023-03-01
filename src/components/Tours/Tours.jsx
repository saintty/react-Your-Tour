import React from "react";
import Section from "./../../UI/section/Section";
import { categories, cards } from "./data";
import CategoryList from "./CategoryList/CategoryList";
import CardList from "./CardList/CardList";

const Tours = () => {
  return (
    <Section title="Выбери свой тур" order="first">
      <CategoryList categories={categories} />
      <CardList cards={cards} />
    </Section>
  );
};

export default Tours;
