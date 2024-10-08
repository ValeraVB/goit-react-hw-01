import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img src={image} alt="User avatar" className="profile-avatar" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="profile-stats">
        <li>
          <span className="stats-label">Followers</span>
          <span className="stats-value">{stats.followers}</span>
        </li>
        <li>
          <span className="stats-label">Views</span>
          <span className="stats-value">{stats.views}</span>
        </li>
        <li>
          <span className="stats-label">Likes</span>
          <span className="stats-value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
