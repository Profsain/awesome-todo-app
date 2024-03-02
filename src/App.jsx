import { useEffect, useState } from "react";
import "./App.css";
import TaskHeader from "./components/TaskHeader";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [comTitle, setComTitle] = useState("Add Todo");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // handle add new todo
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  // handle edit todo
  const handleEditTodo = (index) => {
    setComTitle("Edit Todo");
    setEditIndex(index);
    setDeleteIndex(index);
    setInputValue(todos[index].text);
  };

  // handle update todo
  const handleUpdateTodo = () => {
    if (inputValue.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { text: inputValue };
      setTodos(updatedTodos);
      setEditIndex(null);
      setInputValue("");
      setComTitle("Add Todo");
    }
  };

  // handle delete todo
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setInputValue("");
    setEditIndex(null);
  };

  // handle toggle todo completed
  const toggleTaskCompletion = (index) => {
    // Make a copy of the todos array
    const updatedTodos = [...todos];

    // Toggle the completed property of the task at the specified index
    updatedTodos[index] = {
      ...updatedTodos[index],
      completed: !updatedTodos[index].completed,
    };

    // Update the todos state with the modified array
    setTodos(updatedTodos);
  };

  return (
    <>
      <main id="container">
        <div className="container">
          <div id="todo">
            <TodoHeader />

            <div className="innerContainer">
              <div className="itemContainer">
                {todos?.map((item, index) => (
                  <TodoItem
                    key={index}
                    item={item}
                    editFunc={() => handleEditTodo(index)}
                    toggleFunc={() => toggleTaskCompletion(index)}
                  />
                ))}
              </div>
              <div>
                <button className="addBtn">
                  {" "}
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div id="editTask">
            <TaskHeader title={ comTitle} />

            {/* add and edit task */}
            <div className="innerContainer">
              <h3>Task Name</h3>
              <input
                className="inputField"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <div className="btnContainer">
                <button
                  className="deleteBtn"
                  onClick={() => handleDeleteTodo(deleteIndex)}
                >
                  Delete
                </button>

                {editIndex === null ? (
                  <button className="saveBtn" onClick={handleAddTodo}>
                    Save
                  </button>
                ) : (
                  <button className="saveBtn" onClick={handleUpdateTodo}>
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
