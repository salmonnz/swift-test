import React from "react";
import styles from "../components/Test2.module.css";

type Props = {
  onClick?: () => void;
};

const Rectangle = (props: Props) => {
  return (
    <div>
      <button className={styles.gridbox2} {...props}>
        <span className={styles.rectangle}></span>
      </button>
    </div>
  );
};

export default Rectangle;
