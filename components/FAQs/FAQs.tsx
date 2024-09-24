import React, { FunctionComponent } from "react";
import styles from "./FAQs.module.scss";
import FAQCategory from "@components/basics/FAQCategory";
import { SingleFAQ, FAQGroup, FAQData } from "@constants";

var faqData = new FAQData();
var faqQuestions1 = new Array<SingleFAQ>();
faqQuestions1.push(
  {
    question: "What's the difference between SARS-CoV-2 wastewater detection and potential COVID-19 exposure notification?",
    answer: "<strong>SARS-CoV-2 wastewater detection</strong>: UC San Diego's wastewater monitoring program tests for the SARS-CoV-2 viral RNA in wastewater outflow from buildings across the campus, and at certain auxiliary UC San Diego buildings.<br /><br /><strong>Potential COVID-19 exposure notification</strong>: When UC San Diego receives notice that an individual infected with COVID‐19 was present at a UC San Diego building or worksite, the locations at which they were present will be shared, effective 01/01/2021. The notice can come from both lab-reported and self-reported cases.",
  },
  {
    question: "How do I read the wastewater monitoring results?",
    answer: "<img src='/faq_explanation.png' width='560' height='191' />",
    hideOnMobile: true,
  },
  {
    question: "What does a positive signal for potential COVID-19 exposure mean?",
    answer: "<strong>Workplace exposure timing</strong>: If someone tests positive, we document the buildings on campus that they visited during their infectious period. The infectious period starts two days before symptoms started or, if they are asymptomatic then two days before the test was taken. These are all included on the Daily Dashboard for Potential Exposure Locations. If someone worked M-F at the EOC, tested on Thursday (asymptomatic) and got a positive result on Friday. We would include the EOC for T-F on the dashboard. If that same person had symptoms that started on Wednesday, then M-F would be included on the dashboard.",
  }
);
var faqCategory1:FAQGroup = {
  displayClose: true,
  questions: faqQuestions1,
}
faqData.set("How to Use the Dashboard", faqCategory1);
var faqQuestions2 = new Array<SingleFAQ>();
faqQuestions2.push(
  {
    question: "What is SARS-CoV-2 wastewater monitoring?",
    answer: "The SARS-CoV-2 virus is shed from the gastrointestinal tract and can be detected in feces early in the infection before clinical symptoms. UC San Diego's wastewater monitoring program tests for SARS-CoV-2 virus in the wastewater outflow from buildings across the campus. Our experience to date has been that our test is extremely sensitive; a sampler covering several buildings housing a hundred or more people is capable of detecting a single individual shedding virus. This enables us to detect viral shedding and encourage COVID-19 testing as early as possible, so that infected individuals can get care, isolate themselves, and avoid infecting others. This is an important component of our multi-layered strategy that has helped UC San Diego avoid large clusters of infection.",
  },
  {
    question: "How frequently are the buildings monitored?",
    answer: "UC San Diego collects and processes composite samples every day. The autosampler machines collect a sample every hour and the 24-hour composite sample is transported to the lab for processing. Occasionally, a building sample will not be able to be collected for a given day due to issues such as clogging, low flow, or other operational issues.",
  },
  {
    question: "Is my building being monitored?",
    answer: "You can use the map on the <a href='https://returntolearn.ucsd.edu/dashboard/index.html'>COVID-19 Daily Dashboard</a> to determine if your building is currently being monitored. We will be expanding our wastewater monitoring program to 200 samplers during winter quarter 2021, so if your building is not currently monitored it may be in the future. Unfortunately, we are not able to monitor every building on campus due to limitations in manhole suitability (placement, depth, etc.) and sampler numbers.",
  },
  {
    question: "Is there a positive wastewater signal associated with my building?",
    answer: "You can use the map on the <a href='https://returntolearn.ucsd.edu/dashboard/index.html'>COVID-19 Daily Dashboard</a> to determine if your building is currently being monitored, and if so, the status of the wastewater signal associated with the building.",
  },
  {
    question: "What does it mean when it says my building is associated with a positive wastewater signal?",
    answer: "If your building is associated with a positive wastewater signal, it may mean that there are one or more infected individuals in the building.",
  },
  {
    question: "If my building is associated with a positive wastewater signal, does it mean there is definitely someone infected inside?",
    answer: "Because multiple buildings can feed wastewater into a single sampler, a positive signal in a building does not necessarily mean there is someone infected inside your building. Further, in some cases individuals who have recovered from their SARS-CoV-2 infection can continue to shed virus into the wastewater for several weeks after they have recovered. These individuals who are no longer infectious can, in some circumstances, contribute to a positive wastewater signal.",
  },
  {
    question: "If there is a positive signal in my building what should I do?",
    answer: "If you used the restroom in a building associated with a positive wastewater signal on that day, out of an abundance of caution, you should get tested promptly. For more information on testing, visit the <a href='https://returntolearn.ucsd.edu/return-to-campus/testing-and-screening/index.html'>Testing and Screening page</a>. Additionally, we encourage you to remain vigilant about masking and social distancing. You do not need to quarantine or isolate until you receive your results.",
  },
  {
    question: "Will you tell us if you find an infected individual in my building?",
    answer: "Information on the location of detected cases at UC San Diego can be found on the <a href='https://returntolearn.ucsd.edu/dashboard/index.html'>COVID-19 Daily Dashboard</a>.",
  },
  {
    question: "I can see there was a positive signal associated with my building, but I did not receive an email alert. Why?",
    answer: "We are currently adapting our wastewater notification process given epidemiological conditions and development of our data systems. Please <a href='https://returntolearn.ucsd.edu/dashboard/index.html'>check the dashboard</a> regularly for information.",
  },
  {
    question: "Where can I find more information and statistics related to wastewater monitoring for SARS-CoV-2 in San Diego County?",
    answer: "Visit the <a href='https://searchcovid.info'>San Diego Epidemiology and Resarch for COVID Health website</a> to learn more about county-wide wastewater surveillance.",
  },
)
var faqCategory2:FAQGroup = {
  displayClose: false,
  questions: faqQuestions2,
}
faqData.set("SARS-CoV-2 Wastewater Monitoring", faqCategory2);

interface FAQsProps {
  faqTrigger: (toggleState: boolean) => void;
}

const FAQs: FunctionComponent<FAQsProps> = ({
  faqTrigger,
}) => {
  return (
    <div className={styles.wrapper}>
      {[...faqData].map(([category, faqCategory]) => (
        <FAQCategory
          key={category}
          name={category}
          displayClose={faqCategory.displayClose}
          questions={faqCategory.questions}
          faqTrigger={faqTrigger}
        />
      ))}
      Couldn&apos;t find your answer or have feedback?<br /><br />
      <a href="https://returntolearn.ucsd.edu/about/contact/index.html">Please submit your question or feedback via our form</a>.
    </div>
  );
};
  
export default FAQs;
  
