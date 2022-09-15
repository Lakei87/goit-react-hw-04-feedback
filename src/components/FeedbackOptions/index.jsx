import { Component } from "react";
// import PropTypes from 'prop-types';

class FeedbackOptions extends Component {

    render() {
        const { options, onLeaveFeedback } = this.props;
        // console.log(onLeaveFeedback)
        return (
            options.map((option, index) => {
                return <button
                    key={index}
                    type="button"
                    onClick={onLeaveFeedback}>{option}</button>;
            })
        )
    }
}

// FeedbackOptions.proptypes = {
//     props: PropTypes.arrayOf(PropTypes.string,),
// }

export default FeedbackOptions;