import React from "react";
import TaskList from "../components/TaskList";
import ActivityFeed from "../components/ActivityFeed";
import TasksByPriorityChart from "../components/TasksByPriorityChart";
import Pagination from "../components/Pagination";
import "../styles/MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="tasks-section">
        <TaskList />
      </div>
      <div className="activity-feed-section">
        <ActivityFeed />
        <TasksByPriorityChart />
      </div>
    </div>
  );
};

export default MainLayout;
