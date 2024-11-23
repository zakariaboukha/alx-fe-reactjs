// src/pages/Profile.jsx
import { Routes, Route, Outlet, Link } from "react-router-dom"; // Import Routes, Route, Outlet, and Link
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
    {/* Define nested routes directly here */}
    <Routes>
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Routes>
    {/* This will render the nested components based on the route */}
    <Outlet />
  </div>
);

export default Profile;
