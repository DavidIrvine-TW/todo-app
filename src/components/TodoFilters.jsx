import React from "react";

function TodoFilters({ filterMode, setFilterMode }) {
  const handleClick = (mode) => {
    setFilterMode(mode);
  };

  return (
    <>
      <button
        className={filterMode === "all" ? "btn active" : "btn"}
        onClick={() => handleClick("all")}
      >
        All
      </button>
      <button
        className={filterMode === "active" ? "btn active" : "btn"}
        onClick={() => handleClick("active")}
      >
        Active
      </button>
      <button
        className={filterMode === "completed" ? "btn active" : "btn"}
        onClick={() => handleClick("completed")}
      >
        Completed
      </button>
    </>
  );
}

export default TodoFilters;
