
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My Profile</h1>

      <ProfileCard
        name="Sejal Bhosale"
        image="https://i.pravatar.cc/300?img=47"
        description="I am a student learning React and web development."
      />
    </div>
  );
}

export default App;