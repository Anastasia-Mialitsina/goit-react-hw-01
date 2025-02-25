import PropTypes from "prop-types";
import "./FriendListItem.css"; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend-list-item">
      <img src={avatar} alt="Avatar" />
      <div className="friend-info">
        <p className="friend-name">{name}</p> {/* Имя друга */}
        <p className={`friend-status ${isOnline ? "online" : "offline"}`}>
          {isOnline ? "Online" : "Offline"}
        </p>{" "}
        {/* Статус */}
      </div>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
