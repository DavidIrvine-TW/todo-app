import Background from "./components/Background";
import Title from "./components/Title";
import Newtodo from "./components/Newtodo";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
import useToggle from "./components/useToggle";
import Footer from "./components/Footer";
import TodoFilterMobile from "./components/TodoFilterMobile";

const DATA = [
  { id: "1", todo: "Go to the gym", completed: false },
  { id: "2", todo: "10 minutes meditation", completed: false },
  { id: "3", todo: "Read for 1 hour", completed: false },
  { id: "4", todo: "Pick up the groceries", completed: false},
  { id: "5", todo: "Remember your training!", completed: false },
];

function App() {
  const [filterMode, setFilterMode] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(DATA);
  const [todos, setTodos] = useState(DATA);
  console.log(todos)

  const [isDarkTheme, toggleMode] = useToggle(
    localStorage.getItem("theme-color") === "dark"
  );

  useEffect(() => {
    document.documentElement.className = isDarkTheme ? "dark" : "";
    localStorage.setItem("theme-color", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const handleFilter = () => {
      switch (filterMode) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.completed));
        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.completed));
        default: //all
          return setFilteredTodos(todos);
      }
    };
    handleFilter();
  }, [todos, filterMode]);

  const addTodohandler = (todoData) => {
    setTodos((prevTodos) => {
      return [todoData, ...prevTodos];
    });
  };

  return (
    <>
      <Background isDarkTheme={isDarkTheme} />
      <main>
        <Title isDarkTheme={isDarkTheme} toggleMode={toggleMode} />
        <Newtodo onAddTodo={addTodohandler} />
        <Todos
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          filterMode={filterMode}
          setFilterMode={setFilterMode}
        />
        <TodoFilterMobile filterMode={filterMode} setFilterMode={setFilterMode}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
