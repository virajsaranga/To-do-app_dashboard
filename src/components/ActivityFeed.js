import React from "react";
import "../styles/ActivityFeed.css";
import profilePic1 from "../assets/profile1.png";
import profilePic2 from "../assets/profile2.png";

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      activity: 'Task "Buy groceries" marked as done.',
      date: "May 30, 2024",
      time: "14:30",
      profilePic: profilePic1,
    },
    {
      id: 2,
      activity: 'Added new task "Clean the house".',
      date: "May 30, 2024",
      time: "11:45",
      profilePic: profilePic2,
    },
    {
      id: 3,
      activity: 'Task "Buy groceries" marked as done.',
      date: "May 30, 2024",
      time: "14:30",
      profilePic: profilePic1,
    },
  ];

  return (
    <div className="activity-feed">
      <h2 className="header2">Activity Feed</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <img
              src={activity.profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <div className="activity-text">
              <p>{activity.activity}</p>
              <span className="datetime">
                {activity.date} at {activity.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
