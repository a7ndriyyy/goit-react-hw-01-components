import css from './friendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  const friendList = friends.map(friend => (
    <FriendListItem key={friend.id} {...friend} />
  ));

  return <ul className={css.friendList}>{friendList}</ul>;
}
