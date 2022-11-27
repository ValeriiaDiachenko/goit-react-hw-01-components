import style from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={style.item}>
            <span className={`${isOnline ? style.Online : style.Offline}`}></span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};