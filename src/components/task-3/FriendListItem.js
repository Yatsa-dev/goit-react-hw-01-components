import PropTypes from 'prop-types';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt="avatar" width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
