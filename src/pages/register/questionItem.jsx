import React from "react";
import { Add } from "@material-ui/icons";
import clsx from "clsx";
import styles from "./questionItem.module.scss";
import { useState } from "react";

function QuestionItem({ question, answer }) {
  const [showAnswer, setShowAnser] = useState(false);

  return (
    <>
      <div
        className={clsx(styles.questionItem)}
        onClick={() => {
          setShowAnser(!showAnswer);
        }}
      >
        <span className={clsx(styles.questionText)}>{question}</span>
        <Add className={clsx(styles.questionIcon)} />
      </div>

      {showAnswer && <div className={clsx(styles.answer)}>{answer}</div>}
    </>
  );
}

export default QuestionItem;
