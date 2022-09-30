import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import SectionTitle from "./SectionTitle";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { textContent: btnName } = e.target;

    switch (btnName) {
      case "Good":
        setGood((prev) => prev + 1);
        break;
      case "Neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "Bad":
        setBad((prev) => prev + 1);
        break;
      default:
        break;
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return Math.round(((good * 100) / countTotalFeedback()));
  };

  return (
    <div
      className="appFeedback"
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '500px',
        minHeight: '300px',
        fontSize: 20,
        color: '#010101',
      }}
    >

      <SectionTitle title='Please leave feedback' className='feedbackOptions'>
        <FeedbackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={onLeaveFeedback} />
      </SectionTitle>

      <SectionTitle title='Statistics' className='feedbackStatistics'>
        {countTotalFeedback() === 0
          ? (<Notification message='There is no feedback' />)
          : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositivePercentage()} />
        }
      </SectionTitle>   
    </div>
  );
};