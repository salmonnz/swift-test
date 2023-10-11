import React from "react";
import styles from "../components/Test2.module.css";

type Props = {
  onClick?: () => void;
};

const Parallelogram = (props: Props) => {
  return (
    <div>
      <button className={styles.gridbox3} {...props}>
        <span className={styles.parallelogram}></span>
      </button>
    </div>
  );
};

export default Parallelogram;
