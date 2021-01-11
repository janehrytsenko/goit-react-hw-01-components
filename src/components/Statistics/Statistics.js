import Data from './Data'
import s from './Statistics.module.css'
import randColor from './randomColor';
import PropTypes from 'prop-types';

function Statistics({ title, items }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statList}>
        {items.map(item => (
        <li key={item.id} style={{ backgroundColor: randColor() }}>
                <Data 
                    label={item.label}
                    percentage={item.percentage}
                />
                </li>
        ))} 
            </ul>
            </section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics