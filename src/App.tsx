import React,{useState} from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ToDoForm } from "./components/ToDoForm";

const App: React.FC = () => {
  const [toDos, setTodos] = useState([])
  const addToDo = (title:string) =>{
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <ToDoForm onAdd={addToDo}/>
      </div>
    </>
  );
};

export default App;
