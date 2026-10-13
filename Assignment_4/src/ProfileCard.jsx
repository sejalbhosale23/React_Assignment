
function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>{props.description}</p>
    </div>
  );
}

export default ProfileCard;