import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem'
import s from './TransactionHistory.module.css'


function TransactionHistory({ items }) {
    return (
        <table className={s.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(item => (
                    <TransactionItem 
                        key={item.id}
                        type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                        />
                ))}
        </table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory