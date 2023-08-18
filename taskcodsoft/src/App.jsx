import React from "react";
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./About";
import Contact from "./Contact";
import Form from "./Form";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Hotels from "./Hotels";
import Cars from "./Cars";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Form></Form>}></Route>
          <Route path="/task1" element={<Task1></Task1>}></Route>
          <Route path="/task2" element={<Task2></Task2>}></Route>
          <Route path="/task2" element={<Task2></Task2>}></Route>
          <Route path="/book-a-flight" element={<Task2></Task2>}></Route>
          <Route path="/hotels" element={<Hotels></Hotels>}></Route>
          <Route path="/rent-a-car" element={<Cars></Cars>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;