import "./App.css";
import { useState } from "react";
import styles from "./GamePage.module.css"
import { Row } from "./utils"

export function GamePage() {
  const [] = useState();
  return (
    <>
      <StatusBar/>
      <Row>
        <InputField/>
        <RedoButton/>
      </Row>
    </>
  );
}

type StatusBarArgs = {
  mode: "timed" | "wordCount";
}

function StatusBar({ mode }: StatusBarArgs) {
  return (
    <Row>
      { mode == "timed" &&
        <span>TIME: 15 / 30 / 60 / 120 / 240</span>
      }
      { mode == "wordCount" &&
        <span>WORD: 10 / 25 / 50 / 100 / 250</span>
      }
      <span>WPM: XX / ACC: XX</span>
    </Row>
  )
}

function InputField() {
  return (
    <input type="text" className={styles.inputField}/>
  )
}

function RedoButton() {
  return (
    <button className={styles.redoButton}>
      redo
    </button>
  )
}
