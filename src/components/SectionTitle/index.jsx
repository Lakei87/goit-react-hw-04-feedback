import PropTypes from 'prop-types';
import styles from './sectionTitle.module.css';

export default function SectionTitle ({ title, children }) {
    return <div className={styles.section}>
        <h2 className={styles.section__title}>{title}</h2>
        {children}
    </div>
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};