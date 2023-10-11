import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styles from "../components/Test2.module.css";
import { Link } from "react-router-dom";
import Square from "./Square";
import Circle from "./Circle";
import Oval from "./Oval";
import Trapezoid from "./Trapezoid";
import Rectangle from "./Rectangle";
import Parallelogram from "./Parallelogram";
import { useTranslation } from "react-i18next";
type Props = {};

const Test2 = (props: Props) => {
  const { t, i18n } = useTranslation();
  const [firstArray, setFirstArray] = useState([
    "Square",
    "Circle",
    "Oval",
    "Trapezoid",
    "Rectangle",
    "Parallelogram",
  ]);
  const turnLeft = () => {
    const tmpFirstArray = [...firstArray];
    const firstElement = tmpFirstArray[0];
    const leftElement = tmpFirstArray.slice(1);
    setFirstArray(leftElement.concat([firstElement]));
  };
  const turnRight = () => {
    const tmpFirstArray = [...firstArray];
    const lastElement = tmpFirstArray[5];
    const leftElement = tmpFirstArray.slice(0, 5);
    setFirstArray([lastElement].concat(leftElement));
  };

  function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const shuffleShape = () => {
    const temFirstArray = [...firstArray];
    setFirstArray(shuffle(temFirstArray));
  };
  const [movePosition, setMovePosition] = useState(0);

  function checkshape(shape: string) {
    switch (shape) {
      case "Square":
        return <Square onClick={() => shuffleShape()} />;
      case "Circle":
        return <Circle onClick={() => shuffleShape()} />;
      case "Oval":
        return <Oval onClick={() => shuffleShape()} />;
      case "Trapezoid":
        return <Trapezoid onClick={() => shuffleShape()} />;
      case "Rectangle":
        return <Rectangle onClick={() => shuffleShape()} />;
      case "Parallelogram":
        return <Parallelogram onClick={() => shuffleShape()} />;
    }
  }

  return (
    <div>
      <div className={styles.bgnav}>
        <Navbar />
        <h1 className={styles.h1}>
          Layout and Style
          <Link className={styles.linkto} to="/">
            <button className={styles.spantoback}>{t("Main")}</button>
          </Link>{" "}
        </h1>
        {/* first para */}
        <div className={styles["first-column"]}>
          {/* first box */}
          <button className={styles.firstbox} onClick={() => turnLeft()}>
            <span className={styles.triangle1}></span>
            <span className={styles.textinbox}>{t("move shape")}</span>
          </button>
          {/* second box */}
          <button
            className={styles.secondbox}
            onClick={() => setMovePosition(movePosition === 1 ? 0 : 1)}
          >
            <span className={styles.triangle2one}>
              <div className={styles.textbigbox}>{t("move position")}</div>
            </span>
            <span className={styles.triangle2two}></span>
            <span>3</span>
          </button>

          {/* third box */}
          <button className={styles.thirdbox} onClick={() => turnRight()}>
            <span className={styles.triangle3}></span>
            <span className={styles.textinbox}>{t("move shape")}</span>
          </button>
        </div>
        <hr className={styles.borderline} />
        {/* grid box 1 */}
        <div className={movePosition === 0 ? styles.grid3one : styles.grid3two}>
          {checkshape(firstArray[0])}
          {checkshape(firstArray[1])}
          {checkshape(firstArray[2])}
        </div>
        {/* grid box 2 */}
        <div className={movePosition === 0 ? styles.grid3two : styles.grid3one}>
          {checkshape(firstArray[3])}
          {checkshape(firstArray[4])}
          {checkshape(firstArray[5])}
        </div>
      </div>
    </div>
  );
};

export default Test2;
