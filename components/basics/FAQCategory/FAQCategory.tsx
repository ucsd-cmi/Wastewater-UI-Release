import React, { FunctionComponent, useState, useEffect } from "react";
import styles from "./FAQCategory.module.scss";
import { CloseIcon } from "@icons";
import { FAQ } from "@basics";
import useBreakpoints from "use-window-width-breakpoints";
import { SingleFAQ } from "@constants";

interface FAQCategoryProps {
  name: string;
  displayClose: boolean;
  questions: Array<SingleFAQ>;
  faqTrigger: (toggleState: boolean) => void;
}

const FAQCategory: FunctionComponent<FAQCategoryProps> = ({
  name,
  displayClose,
  questions,
  faqTrigger,
}) => {
  const breakpoint = useBreakpoints();
  const [expandAllState, setExpandAllState] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.faqHeader}>
        <div className={styles.faqTitle}>{name}</div>
        {displayClose === true ? (
          <div className={styles.faqClose}><CloseIcon onClick={() => faqTrigger(false)} /></div>
        ) : (
          <div />
        )}
      </div>
      {expandAllState === true ? (
        <div className={styles.expandAndCollapse} onClick={() => setExpandAllState(!expandAllState)}>- Collapse All</div>
      ) : (
        <div className={styles.expandAndCollapse} onClick={() => setExpandAllState(!expandAllState)}>+ Expand All</div>
      )}
      {questions.map((singleFAQ, index) => {
        if (breakpoint.up.md || (breakpoint.down.sm && !singleFAQ.hideOnMobile)) { return (
        <div className={styles.faqSection} key={index}>
          <FAQ
            question={singleFAQ.question}
            answer={singleFAQ.answer}
            expand={expandAllState}
          />
        </div>
      )}})}
    </div>
  );
};
  
export default FAQCategory;
  