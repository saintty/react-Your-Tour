import React from "react";
import Section from "./../../UI/section/Section";

import styles from "./Tours.module.scss";
import { categories } from "./data";
import CategoryList from "./CategoryList/CategoryList";

const Tours = () => {
  return (
    <Section title="Выбери свой тур">
      <CategoryList categories={categories} />
    </Section>
  );
};

export default Tours;
