import React from "react";
import Section from "./../../UI/section/Section";

import styles from "./Tours.module.scss";
import { categories, cards } from "./data";
import CategoryList from "./CategoryList/CategoryList";
import Card from "./card/Card";
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
