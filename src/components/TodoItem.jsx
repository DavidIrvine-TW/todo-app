import { useState } from "react";
import cross from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import useToggle from "./useToggle";
import { Draggable } from "@hello-pangea/dnd";

function TodoItem({ todo, todos, setTodos, index }) {
  const [toggleItem, setToggleItem] = useToggle(false);
  const gradient = "bg-gradient-to-r from-bright-blue to-background2";
  const [mutableTodo, setMutableTodo] = useState(todo);
  const compTodoClass = mutableTodo.completed
    ? "text-lghtgrayblue dark:text-vdarkgrayblue line-through decoration-lghtgrayblue dark:decoration-vdarkgrayblue"
    : "text-vdgrayblue dark:text-lghtgrayblue";

  const toggleCompleted = () => {
    const updatedTodo = { ...mutableTodo, completed: !mutableTodo.completed };
    setMutableTodo(updatedTodo);
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? updatedTodo : item
    );
    setTodos(updatedTodos);
  };

  const handleSpanClick = () => {
    const checkbox = document.getElementById(todo.id);
    checkbox.checked = !mutableTodo.completed;
    setToggleItem(true);
    toggleCompleted();
  };

  const handleCrossClick = () => {
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <Draggable key={index} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-inherit w-[540px] h-[64px] py-[1.25em] px-[1.5em] flex border-b-[1px] border-vlghtgrayblue dark:border-vdarkgrayblue2 bg-white dark:bg-vdarkdesatblue transition-transform`}
        >
          <input
            id={todo.id}
            type="checkbox"
            checked={mutableTodo.completed}
            onChange={toggleCompleted}
            style={{ display: "none" }}
          />
          <span
            className={`${
              toggleItem ? gradient : ""
            } w-[24px] h-[24px] border border-lghtgrayblue dark:border-darkgrayblue rounded-full mr-[1.5em] flex align-center justify-center cursor-pointer`}
            onClick={handleSpanClick}
          >
            {toggleItem ? <img src={check} alt="check Icon" /> : ""}
          </span>

          <div>
            <p className={`${compTodoClass} text-body-dk`}>
              {mutableTodo.todo}
            </p>
          </div>

          <div className="ml-auto cursor-pointer">
            {toggleItem ? (
              <img src={cross} alt="crossIcon" onClick={handleCrossClick} />
            ) : (
              ""
            )}
          </div>
        </li>
      )}
    </Draggable>
  );
}

export default TodoItem;
