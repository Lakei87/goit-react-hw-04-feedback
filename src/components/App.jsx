import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import SectionTitle from "./SectionTitle";
import Statistics from "./Statistics";

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  }

  onLeaveFeedback = e => {
    const { textContent: btnName } = e.target;

    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }))
  }

  countTotalFeedback = () => {
    const stateValuesArr = Object.values(this.state);

    return stateValuesArr.reduce((total, value) => {
      return total += value
    })
  }

  countPositivePercentage = () => {
    const numPositiveFeedback = this.state.Good;

    return Math.round(((numPositiveFeedback * 100) / this.countTotalFeedback()));
  }

  render() {
    const { Good, Neutral, Bad } = this.state;

    return (
      <div
        className="appFeedback"
        style={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '500px',
          fontSize: 20,
          color: '#010101',
          backgroundColor: "#bada55",
          
        }}
      >
  
        <SectionTitle title='Please leave feedback' className='feedbackOptions'>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback} />
        </SectionTitle>
  
        <SectionTitle title='Statistics' className='feedbackStatistics'>
          <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositivePercentage()} />
        </SectionTitle>
        
      </div>
    );
  }
}

export default App;