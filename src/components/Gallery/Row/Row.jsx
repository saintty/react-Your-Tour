import React from "react";
import PropTypes from "prop-types";
import Picture from "./../Picture/Picture";

import cx from "classnames";
import styles from "./Row.module.scss";

const Row = ({ pictures, smallGap }) => {
  return (
    <div className={cx(styles.row, smallGap && styles.small)}>
      {pictures.map((item) => (
        <Picture
          picture={item.picture}
          hide={item.hide}
          key={`${item.picture}`}
        />
      ))}
    </div>
  );
};

Row.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string.isRequired,
      hide: PropTypes.oneOf(["medium", "small"]),
    })
  ),
};

export default Row;
