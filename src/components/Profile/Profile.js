import PropTypes from 'prop-types';
import s from './Profile.module.css'

const Profile = ({ avatarUrl, name, tag, location, followers, views, likes }) => {
    return (
        <div className={s.container}>
            <div>
                <img
                    src={avatarUrl}
                    alt={name}
                    className={s.avatar}
                     width="100"
    />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>
            <ul className={s.stats}>
    <li className={s.item}>
                    <span>Followers</span>
                    <span>{followers}</span>
    </li>
    <li className={s.item}>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li className={s.item}>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile