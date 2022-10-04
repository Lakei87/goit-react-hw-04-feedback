import PropTypes from 'prop-types';
import styles from './feedbackOptoins.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        options.map((option, index) => {
            return <button
                className={styles.button}
                key={index}
                type="button"
                onClick={onLeaveFeedback}>{option}</button>;
        })
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};