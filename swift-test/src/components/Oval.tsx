import React from "react";
import styles from "../components/Test2.module.css";

type Props = {
  onClick?: () => void;
};

const Oval = (props: Props) => {
  return (
    <div>
      <button className={styles.gridbox3} {...props}>
        <span className={styles.oval}></span>
      </button>
    </div>
  );
};

export default Oval;
