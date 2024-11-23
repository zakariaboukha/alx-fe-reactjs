// src/pages/Profile.jsx
import { Outlet, Link } from "react-router-dom";

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <nav>
      <Link to="details">Profile Details</Link> |{" "}
      <Link to="settings">Profile Settings</Link>
    </nav>
    <hr />
    <Outlet />
  </div>
);

export default Profile;
