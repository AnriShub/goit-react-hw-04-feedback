import React, { useState } from 'react';
import { Section } from "components/Section/Section.jsx";
import { Statistics } from "components/Statistics/Statistics.jsx";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions.jsx";
import { Notification } from "components/Notification/Notification.jsx";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default:
        return
    }

  }

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100)
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      color: 'black',
    }}>
      <Section title="Please leave feedback" >
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics" >
        {countTotalFeedback() === 0 ?
          <Notification
            message="There is no feedback" /> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
        }
      </Section>
    </div >
  )
}

