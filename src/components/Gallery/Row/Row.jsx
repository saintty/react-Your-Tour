import React from "react";
import PropTypes from "prop-types";
import Picture from "./../Picture";

import cx from "classnames";
import styles from "./Row.module.scss";

const Row = React.memo(({ pictures, smallGap }) => {
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
});

Row.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string.isRequired,
      hide: PropTypes.oneOf(["medium", "small"]),
    })
  ),
  smallGap: PropTypes.bool,
};

Row.defaultProps = {
  smallGap: false,
};

export default Row;
