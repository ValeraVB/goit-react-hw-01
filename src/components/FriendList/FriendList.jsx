import FriendListItem from "../FriendListItem/FriendListItem";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <div className="friend-list-container">
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className="friend-list-item-wrapper">
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
