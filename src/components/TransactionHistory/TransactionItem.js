import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'


const TransactionItem = ({ type, amount, currency }) => {
    return (
        <tbody className={s.tableRow}>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            </tbody>
    )
}

export default TransactionItem