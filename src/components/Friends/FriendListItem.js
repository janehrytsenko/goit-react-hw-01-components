import PropTypes from 'prop-types';
import s from './Friends.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={s.item}>
            <span className={s.status} style={{ background: isOnline ? 'green' : 'red' }}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name} style={{fontSize: 20}}>{name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem