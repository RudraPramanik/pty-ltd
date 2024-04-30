import React from "react";
import styles from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.innerContainer}>
        <button className={styles.button}>Done</button>
        <button className={styles.button}>Done</button>{" "}
        <button className={styles.button}>Done</button>
      </div>
    </div>
  );
};

export default Buttons;
