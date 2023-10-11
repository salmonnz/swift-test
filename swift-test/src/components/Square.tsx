import styles from "../components/Test2.module.css";

type Props = {
  onClick?: () => void;
};

const Square = (props: Props) => {
  return (
    <div>
      <button className={styles.gridbox1} {...props}>
        <span className={styles.square}></span>
      </button>
    </div>
  );
};

export default Square;
