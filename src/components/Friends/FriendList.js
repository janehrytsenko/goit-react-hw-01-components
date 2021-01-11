import FriendListItem from './FriendListItem'
import s from './Friends.module.css'
import PropTypes from 'prop-types';

function FriendList({ friends } ) {
    return (
        <ul className={s.list}>
            {friends.map(friend => (
        <li key={friend.id}>
                    <FriendListItem
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                />
                </li>
        ))} 
        </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList