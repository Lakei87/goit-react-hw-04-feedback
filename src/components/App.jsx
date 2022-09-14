// import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import SectionTitle from "./SectionTitle";

export const App = () => {

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >

      <SectionTitle title={'Please leave feedback'}>
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} />
      </SectionTitle>

      <SectionTitle title={'Statistics'}></SectionTitle>
      
    </div>
  );
};
