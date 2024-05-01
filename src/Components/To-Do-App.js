import "./ToDoApp.css";
import { IoSearch } from "react-icons/io5";
export const ToDoApp = () => {
  return (
    <div className="ToDoApp">
      <div className="to-do-app-wrapper">
        <h1>THINGS TO DO</h1>
        <div className="to-do-input-wrapper">
          <input
            type="text"
            placeholder="Add New"
            className="to-do-app-input"
          />
        </div>
        <div className="to-do-list-wrapper">
          <label for="to-do-list">
            {" "}
            <input type="checkbox" name="Java" value="Java" id="to-do-list" />
            Java
          </label>
          <label for="to-do-list">
            {" "}
            <input type="checkbox" name="Java" value="Java" id="to-do-list" />
            Java
          </label>
          <label for="to-do-list">
            {" "}
            <input type="checkbox" name="Java" value="Java" id="to-do-list" />
            Java
          </label>
          
        </div>
        <div className="buttons-wrappper">
          <div className="addBtn-searchIcon-countItems-wrapper">
          <button className="add-btn">+</button>
         <button className="search"><IoSearch  className="search-btn"/></button> 
          <p> 0 items left</p>
          </div>
         
          <div className="all-active-completed-btn-wrapper">
            <button className="completed-all-active-btns">All</button>
            <button className="completed-all-active-btns">Active</button>
            <button className="completed-all-active-btns">Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};
