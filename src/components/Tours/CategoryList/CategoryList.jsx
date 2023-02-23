import React, { useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

import styles from "./CategoryList.module.scss";

const CategoryList = ({ categories }) => {
  const [active, setActive] = useState(categories[0].name);

  return (
    <ul className={styles.list}>
      {categories.map((item) => (
        <CategoryItem
          name={item.name}
          link={item.link}
          active={item.name === active}
          setActive={setActive}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
