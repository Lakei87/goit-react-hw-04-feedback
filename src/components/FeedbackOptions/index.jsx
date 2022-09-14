import { Component } from "react";
// import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0
    }

    handleButtonClick = e => {
        const { textContent: btnName } = e.target;

        this.setState(prevState => ({
            [btnName]: prevState[btnName] + 1,
        }))

    }

    render() {
        const { options } = this.props;

        return (
            options.map((option, index) => {
                return <button
                    key={index}
                    type="button"
                    onClick={this.handleButtonClick}>{option}</button>;
            })
        )
    }
}

// FeedbackOptions.proptypes = {
//     props: PropTypes.arrayOf(PropTypes.string,),
// }

export default FeedbackOptions;