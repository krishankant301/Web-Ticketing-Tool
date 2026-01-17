import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Todo App</h1>
      <p>
        Organize your tasks efficiently using a simple Todo List
        or manage workflows visually with a Kanban Board.
      </p>

      <div className="home-actions">
        <Link to="/todo">
          <button>Go to Todo List</button>
        </Link>

        <Link to="/kanban">
          <button>Go to Kanban Board</button>
        </Link>
      </div>

      <section className="home-info">
        <h2>Features</h2>
        <ul>
          <li>Create, edit, and delete tasks</li>
          <li>Track task progress easily</li>
          <li>Visual Kanban board for workflow management</li>
          <li>Simple and easy to use</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
