import React from "react";
import TodoForm from "./TodoForm";

function Newtodo(props) {
  const saveTodoDataHandler = (todoData) => {
    props.onAddTodo(todoData);
  };

  return (
    <div className="bg-white w-[540px] h-[64px] py-[1.25em] px-[1.5em] flex  rounded dark:bg-vdarkdesatblue transition-colors">
      <div className="w-[24px] h-[24px] border border-lghtgrayblue rounded-full mr-[1.5em] dark:border-darkgrayblue transition-colors"></div>
      <TodoForm onSaveTodoData={saveTodoDataHandler} />
    </div>
  );
}

export default Newtodo;
