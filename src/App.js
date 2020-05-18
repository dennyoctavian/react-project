import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn main-black-color"> Add </button>
          <h1 className="header-title"> List Kegiatan Saya </h1>
          <button className="header-btn main-red-color"> Clear </button>
        </section>

        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input" />
            <button className="header-btn main-black-color"> Add </button>
          </form>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todo-text"> Belajar React </span>
          </div>
          <div className="todo">
            <span className="todo-text"> Belajar React </span>
          </div>
          <div className="todo">
            <span className="todo-text"> Belajar React </span>
          </div>
          <div className="todo">
            <span className="todo-text"> Belajar React </span>
          </div>
          <div className="todo">
            <span className="todo-text"> Belajar React </span>
          </div>
        </section>
      </div>
    </div>
  );
}
