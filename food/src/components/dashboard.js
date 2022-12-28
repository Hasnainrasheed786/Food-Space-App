import React, { useState, useEffect } from "react";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("_myEmail");
    navigate("/");
  };
  return (
    <div>
      <nav className="dashboard--nav">
        <h2>BookMe</h2>
        <button onClick={handleLogout} className="logout--btn">
          Log Out
        </button>
      </nav>
      <main className="dashboard--main">
        <h2 className="dashboard-heading">Select Your Availability</h2>
        <div className="timezone-wraper">
          <p>Pick your timezone</p>
          <TimezoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
          />
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
