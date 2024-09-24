import React, { FunctionComponent, useState, useEffect } from "react";
import styles from "./FAQ.module.scss";
import { FAQCollapsed, FAQExpanded } from "@icons"
import parse from "html-react-parser";

interface FAQProps {
    question: string;
    answer: string;
    expand: boolean;
}

const FAQ: FunctionComponent<FAQProps> = ({
  question,
  answer,
  expand,
}) => {
  const [expandedState, setExpandedState] = useState<boolean>(expand);

  useEffect(() => {
    setExpandedState(expand);
  }, [expand]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.question} onClick={() => setExpandedState(!expandedState)} >
        <div className={styles.questionIcon}>
          {expandedState === true ? (
            <FAQExpanded />
          ) : (
            <FAQCollapsed />
          )}
        </div>
        <div className={styles.questionText}>{question}</div>
      </div>
      {expandedState && <div className={styles.answer}>{parse(answer)}</div>}
    </div>
  );
};
  
export default FAQ;
  