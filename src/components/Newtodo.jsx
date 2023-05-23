import React from "react";
import TodoForm from "./TodoForm";

function Newtodo(props) {
  const saveTodoDataHandler = (todoData) => {
    props.onAddTodo(todoData);
  };

  return (
    <div className="bg-white w-[327px] h-[48px] mx-auto desktop:w-[540px] desktop:h-[64px] py-[0.875em] px-[1.25em] desktop:py-[1.5em] desktop:px-[1.5em] flex  rounded dark:bg-vdarkdesatblue transition-colors">
      <div className="desktop:w-[24px] desktop:h-[24px] w-[20px] h-[20px] border border-lghtgrayblue rounded-full mr-[0.75em] desktop:mr-[1.5em] dark:border-darkgrayblue transition-colors"></div>
      <TodoForm onSaveTodoData={saveTodoDataHandler} />
    </div>
  );
}

export default Newtodo;
