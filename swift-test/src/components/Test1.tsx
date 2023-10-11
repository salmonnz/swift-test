import styles from "../components/Test1.module.css";

import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Test1 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.bgnav}>
      <Navbar />
      <div className={styles.container}>
        <Link className={styles.linkto} to="/Test2">
          <button className={styles["box-element"]}>
            <div className={styles["text-inside"]}>{t("Test")} 1</div>
            <div className={styles["text-inside2"]}>{t("Layout & Styles")}</div>
          </button>
        </Link>

        <div className={styles["box-element"]}>
          <div className={styles["text-inside"]}>{t("Test")} 2</div>
          <div className={styles["text-inside2"]}>{t("Connect")} API</div>
        </div>
        <Link className={styles.linkto} to="/Test3">
          <div className={styles["box-element"]}>
            <div className={styles["text-inside"]}>{t("Test")} 3</div>
            <div className={styles["text-inside2"]}>{t("Form and Table")}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Test1;
