import React from "react";
import "./style.css";
import First from './First.js';
import Todolist from './Todolist.js';
export default function App() {
  return (
    <div className="betterview">
      <h1>App component(Parent)</h1>
      <Todolist></Todolist>
      <hr/>
      <First></First>
    </div>
  );
}
