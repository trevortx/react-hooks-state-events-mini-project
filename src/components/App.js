import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES)

  function onDeleteTask(event) {
    setTasks(tasks.filter(task => task.text !== event.target.value))
  }

  function handleCategory(event) {
    const selection = event.target.name
    console.log(selection)
    const filteredTasks = function() {
      if (selection === "All") {
        setTasks(TASKS)
      } else 
      setTasks(TASKS.filter(task => task.category === selection))
    }
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} setCategories={setCategories} key={categories} 
      handleCategory={handleCategory} />
      <NewTaskForm />
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
