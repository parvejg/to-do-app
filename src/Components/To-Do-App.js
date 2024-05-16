import { useState } from "react";
import "./ToDoApp.css";
import { IoSearch } from "react-icons/io5";
export const ToDoApp = () => {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [filterKey, setFilterKey] =useState("")


const getUpdatedTodo =(key)=>{

  if(key){
    if(key === "completed"){
    return  todo?.filter((tasks)=> tasks.status === "completed")
      
    }
    if(key=== "active"){
    return  todo?.filter((tasks)=> tasks.status === "active")

    }
    if(key=== "all"){
      return todo
    }
  }else{
    return todo
  }
  
}
const updatedTodo = getUpdatedTodo(filterKey)
const seachHandler =()=>{
  const filteredText = updatedTodo.filter((todoTxt)=>
    todoTxt.text=== todoText.toLowerCase()
  )
  setTodo(filteredText)
}

  const todosHandler = () => {
    let todoObj = {};
    if (todoText) {
      todoObj.text = todoText;
      todoObj.id = todo.length + 1;
      todoObj.status = "active";
    }
    setTodo([...todo, todoObj]);
    setTodoText("");
  };
  const selectedTodosHandler = (item, e) => {
    const newTodos = [...todo];
    const todoindex = todo.findIndex((task) => task.id === item.id);
    let updatedTodoObj = newTodos[todoindex];
    if (e.target.checked) {
      updatedTodoObj.status = "completed";
      newTodos[todoindex] = updatedTodoObj;
    } else {
      updatedTodoObj.status = "active";
      newTodos[todoindex] = updatedTodoObj;
    }
  setTodo(newTodos)
  };
  return (
    <div className="ToDoApp">
      <div className="to-do-app-wrapper">
        <h1>THINGS TO DO</h1>
        <div className="to-do-input-wrapper">
          <input
            type="text"
            placeholder="Add New"
            className="to-do-app-input"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>
        {updatedTodo?.map((item) => {
          return (
            <div className="to-do-list-wrapper" key={item.id}>
              <label for="to-do-list">
                <input
                  type="checkbox"
                  onChange={(e) => selectedTodosHandler(item,e)}
                  checked={item.status === "completed"}
                  id="to-do-list"
                />
                {item.text}
              </label>
            </div>
          );
        })}

        <div className="buttons-wrappper">
          <div className="addBtn-searchIcon-countItems-wrapper">
            <button
              className="add-btn"
              onClick={() => todosHandler(todo)}
              disabled={!todoText}
            >
              +
            </button>
            <button className="search">
              <IoSearch className="search-btn"  onClick={()=> seachHandler(todo)}/>
            </button>
            <span className="tasks-count">{todo?.length} items left</span>
          </div>
          <div className="all-active-completed-btn-wrapper">
            <button className="completed-all-active-btns" 
             onClick={()=>setFilterKey("all")}
            >All</button>
            <button className="completed-all-active-btns"
            onClick={()=>{
              const filteredActivetodos = todo?.filter((tasks)=> tasks.status === "active")
         setFilterKey("active")
            }
              
             }
            
            >Active</button>
            <button className="completed-all-active-btns" onClick={()=>{
              const filteredcompleredtodo = todo?.filter((tasks)=> tasks.status === "completed")
              setFilterKey("completed")

            }
             } >Completed</button> 
          </div>
        </div>
      </div>
    </div>
  );
};
