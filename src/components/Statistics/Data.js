import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Data = ({ label, percentage }) => {
    return (
                <div className={s.item}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </div>
    )
}

Data.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Data