
function TodoFilterMobile({ filterMode, setFilterMode }) {
  const handleClick = (mode) => {
    setFilterMode(mode);
  };

  return (
 
    <div className="gap-[1em] desktop:hidden mt-[1em] h-[48px] w-[327px] flex items-center justify-center bg-white dark:bg-vdarkdesatblue rounded shadow-boxshadowlight dark:shadow-boxshadowdark overflow-hidden transition-all">
        <div className="flex items-center justify-center gap-[1rem] text-dgrayblue">
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
    </div>
    
  );
}

export default TodoFilterMobile;
