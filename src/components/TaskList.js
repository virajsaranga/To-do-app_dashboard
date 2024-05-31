import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import doneIcon from "../assets/bell-blue.PNG";
import pendingIcon from "../assets/bell-red.PNG";
import inProgressIcon from "../assets/bell-yellow.PNG";
import "../styles/TaskList.css";

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: "Contract #00124 need John Beige's signature",
      status: "Done",
      date: "Sep 16",
      priority: "LOW",
    },
    {
      id: 2,
      title: "Franklin More's professional review is pending",
      status: "Done",
      date: "Sep 12",
      priority: "MEDIUM",
    },
    {
      id: 3,
      title: "Prepare quarterly report for board meeting",
      status: "Pending",
      date: "Sep 20",
      priority: "HIGH",
    },
    {
      id: 4,
      title: "Review marketing campaign strategy",
      status: "In Progress",
      date: "Sep 18",
      priority: "MEDIUM",
    },
    {
      id: 5,
      title: "Update website content",
      status: "Pending",
      date: "Sep 22",
      priority: "LOW",
    },
    {
      id: 6,
      title: "Arrange team building activity",
      status: "Pending",
      date: "Sep 25",
      priority: "HIGH",
    },
    {
      id: 7,
      title: "Finalize budget proposal for next quarter",
      status: "In Progress",
      date: "Sep 19",
      priority: "MEDIUM",
    },
    {
      id: 8,
      title: "Prepare presentation for client meeting",
      status: "Done",
      date: "Sep 14",
      priority: "LOW",
    },
    {
      id: 9,
      title: "Arrange travel accommodations for team members",
      status: "Pending",
      date: "Sep 23",
      priority: "HIGH",
    },
    {
      id: 10,
      title: "Conduct performance evaluations for team",
      status: "In Progress",
      date: "Sep 21",
      priority: "MEDIUM",
    },
    {
      id: 11,
      title: "Review project timelines and milestones",
      status: "Pending",
      date: "Sep 24",
      priority: "HIGH",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = 8;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const markAsDone = (taskId) => {
    console.log(`Marking task ${taskId} as done`);
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "done":
        return doneIcon;
      case "pending":
        return pendingIcon;
      case "in progress":
        return inProgressIcon;
      default:
        return "";
    }
  };

  const offset = currentPage * tasksPerPage;
  const currentTasks = tasks.slice(offset, offset + tasksPerPage);
  const pageCount = Math.ceil(tasks.length / tasksPerPage);

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {currentTasks.map((task) => (
          <li key={task.id} className={`task ${task.status.toLowerCase()}`}>
            <img
              src={getStatusIcon(task.status)}
              alt={task.status}
              className="status-icon"
            />
            <span className={`priority ${task.priority.toLowerCase()}`}></span>
            <div className="task-details">
              <p>{task.title}</p>
              {task.status.toLowerCase() === "in progress" && (
                <span
                  onClick={() => markAsDone(task.id)}
                  className="mark-as-done-text"
                >
                  Mark as done
                </span>
              )}
            </div>
            <span className={`status ${task.status.toLowerCase()}`}>
              {task.status}
            </span>
            <span className="date">{task.date}</span>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={8}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default TaskList;
