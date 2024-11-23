// src/coponents/Profile.jsx
import { Outlet, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails"; // Import ProfileDetails component
import ProfileSettings from "./ProfileSettings"; // Import ProfileSettings component

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <nav>
      <Link to="details">Profile Details</Link> |{" "}
      <Link to="settings">Profile Settings</Link>
    </nav>
    <hr />
    {/* The nested routes will render here */}
    <Outlet />
  </div>
);

export default Profile;
