import React from "react";
import styles from "../components/Test2.module.css";

interface CircleProps {
  onClick?: () => void;
}

const Circle: React.FC<CircleProps> = (props) => {
  return (
    <>
      <button className={styles.gridbox2} {...props}>
        <span className={styles.circle}></span>
      </button>
    </>
  );
};

export default Circle;
