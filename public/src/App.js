import React, { useState, useEffect, createContext } from "react";
import Header from "./myComponents/Header";
import AddTodo from "./myComponents/AddTodo";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import About from "./myComponents/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./myComponents/NotFound";

///////////////////////////////////////////////////////////
// useContext Hook concept...
//basically useContext remove the nested importing of modules if we want to pass anything from top parent module to bottom module..

const FirstName = createContext();
const LastName = createContext();
///////////////////////////////////////////////////////////

export default function App(props) {
  let initTodo;
  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  function onDelete(todo) {
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    //upadating in localStorage is done by useEffect Hook...
    console.log(`Todo of sno ${todo.sno} Delete form list....`);
  }

  function addTodo(title, desc) {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length] + 1;
    }

    let newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newTodo]);
    console.log(newTodo, " Added...");
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="1st React App" searchBar={false} />

        <Switch>
          <Route exact path="/">
            <>
              <AddTodo addTodo={addTodo} />
              {/* /////////////////////////////////////////////////// */}
              {/* initializing created context and return them... */}
              {/* Provider Property enable us to initialize (or set value) of respective created Context*/}
              <FirstName.Provider value={"Dheeraj"}>
                <LastName.Provider value={"Patidar"}>
                  <Todos todos={todos} onDelete={onDelete} />
                </LastName.Provider>
              </FirstName.Provider>
              {/* ////////////////////////////////////////////////////// */}
            </>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route component={NotFound} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export { FirstName, LastName};
