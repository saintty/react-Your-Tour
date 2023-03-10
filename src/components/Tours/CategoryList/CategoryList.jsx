import React, { useState } from "react";
import PropTypes from "prop-types";
import Category from "../Category";

import styles from "./CategoryList.module.scss";

const CategoryList = React.memo(({ categories }) => {
  const [active, setActive] = useState(categories[0].name);

  return (
    <ul className={styles.list}>
      {categories.map((item) => (
        <Category
          name={item.name}
          link={item.link}
          active={item.name === active}
          setActive={setActive}
          key={item.name}
        />
      ))}
    </ul>
  );
});

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default CategoryList;
