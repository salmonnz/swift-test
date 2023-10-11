import React from "react";
import styles from "../components/Test2.module.css";
type Props = {
  onClick?: () => void;
};

const Trapezoid = (props: Props) => {
  return (
    <div>
      <button className={styles.gridbox1} {...props}>
        <span className={styles.trapezoid}></span>
      </button>
    </div>
  );
};

export default Trapezoid;
