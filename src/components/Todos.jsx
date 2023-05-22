import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";
import { DragDropContext, Droppable } from '@hello-pangea/dnd'

function todos({ todos, setTodos, filteredTodos, filterMode, setFilterMode }) {
  const [itemsLeft, setItemsLeft] = useState(0);

  const overviewText =
    filterMode === "completed" ? "completed items :(" : "todos";

  useEffect(() => {
    const notComp = todos.filter((todo) => !todo.completed);
    setItemsLeft(notComp.length);
  }, [todos]);

  const clearComp = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterMode("all");
  };

  const onDragEndHandle = (result) => {
    if (!result.destination) return;
    const updatedList = Array.from(todos);
    const [reorderedItem] = updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, reorderedItem);
    const updatedTodos = updatedList.map((item, index) => ({...item, index}));
    setTodos(updatedTodos);
  };


  
return (
    <div className="mt-[1.5em] bg-white dark:bg-vdarkdesatblue rounded shadow-boxshadowlight dark:shadow-boxshadowdark overflow-hidden transition-all ">
      {filteredTodos.length < 1 ? <p className="bg-inherit w-[540px] h-[64px] py-[1.25em] px-[1.5em] flex border-b-[1px] border-vlghtgrayblue dark:border-vdarkgrayblue2 transition-transform text-vdgrayblue dark:text-lghtgrayblue text-center">
          There's no {overviewText}</p> : ""} 

        <DragDropContext onDragEnd={onDragEndHandle}>
          <Droppable droppableId='list'>
            {(provided) => (                         
              <ul className='list' {...provided.droppableProps} ref={provided.innerRef} >
                {filteredTodos.map((todo, index) => 
                (<TodoItem todo={todo} key={todo.id} setTodos={setTodos} todos={todos} index={index}/>))}
               {provided.placeholder}
               </ul>
            )}
          </Droppable>
        </DragDropContext>

      <div className="flex justify-between px-[1.5em] py-[1em] text-dgrayblue text-[0.875rem] bg-inherit">
        <div>
          <p>
            <span className="underline underline-offset-8">{itemsLeft}</span>{" "}
            Items left
          </p>
        </div>

        <div className="flex gap-[1em]">
          <TodoFilters filterMode={filterMode} setFilterMode={setFilterMode} />
        </div>
        <div>
          <button onClick={clearComp}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default todos;
