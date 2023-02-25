import React from "react";
import Picture from "./../Picture/Picture";
import classNames from "classnames";

import styles from "./Row.module.scss";

const Row = ({ pictures, smallGap }) => {
  console.log(pictures[0]);
  return (
    <div className={classNames(styles.row, smallGap && styles.small)}>
      {pictures.map((item) => (
        <Picture
          picture={item.picture}
          mediumHide={item.isMediumHidden}
          smallHide={item.isSmallHidden}
          key={`${item.picture}`}
        />
      ))}
    </div>
  );
};

export default Row;
