import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={`friend-list-item ${isOnline ? "online" : "offline"}`}>
      <img src={avatar} alt="Avatar" className="friend-avatar" />
      <p className="friend-name">{name}</p>
      <p className="friend-status">{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
