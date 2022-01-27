import React from "react";
import QuestionItem from "./questionItem";
import clsx from "clsx";
import styles from "./question.module.scss";
import listQuestion from "./listquestion";
const Question = () => {
  return (
    <div className={clsx(styles.questionsContain)}>
      <div className={clsx(styles.questions)}>
        <h1 className={clsx(styles.questionTitle)}>
          Frequently Asked Questions
        </h1>
        <div className={clsx(styles.questionList)}>
          {listQuestion.map((item, index) => (
            <QuestionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
