import React from "react";

function TodoFilters({ filterMode, setFilterMode }) {
  const handleClick = (mode) => {
    setFilterMode(mode);
  };

  return (
 
    <div className="gap-[1em] hidden desktop:flex">
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
      </div>
    
  );
}

export default TodoFilters;
