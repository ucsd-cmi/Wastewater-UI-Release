import { Question } from "@icons";
import React, { FunctionComponent } from "react";
import styles from "./HeaderNotes.module.scss";

interface HeaderNotesProps {
  faqTrigger: (toggleState: boolean) => void;
}

const HeaderNotes: FunctionComponent<HeaderNotesProps> = ({
  faqTrigger
}) => (
  <div className={styles.noteContainer}>
    <div className={styles.noteLeftBorder} />
    <div className={styles.noteSubContainer}>
      <div className={styles.note}>
        <ul className={styles.noteList}>
          <li>
            <strong>Multiple</strong> buildings can feed wastewater into one
            sample
          </li>
          <li>
            COVID-19 positive individuals <strong>self-reported</strong> to be present at potential exposure locations
          </li>
          <li>
            <a href="https://returntolearn.ucsd.edu/return-to-campus/testing-and-screening/index.html">
              Where can I get a COVID-19 Test?
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.iconContainer}>
        <Question className={styles.questionIcon} onClick={() => faqTrigger(true)} />
      </div>
    </div>
  </div>
);

export default HeaderNotes;
