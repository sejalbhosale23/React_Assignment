import sejalImage from "./assets/sejal_pass.jpg";
function ProfileCard(props) {
  return (
    <div className="profile-card">
      {/* <img src={props.image} alt={props.name} /> */}
      <img src={sejalImage} alt="Sejal Bhosale" />

      <h2>{props.name}</h2>

      <p>{props.description}</p>
    </div>
  );
}

export default ProfileCard;