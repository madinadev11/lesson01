import "./App.css"; 
import React from "react"; 
import { Route, Routes } from "react-router-dom"; 
import Header from "./components/Header"; 
import Contact from "./components/Contact"; 
import Home from "./components/Home"; 
import About from "./components/About"; 
import { useState } from "react"; 
 
function App() { 
  const [data, setData] = useState([]); 
 
  function addProduct(newProduct) { 
    let data = JSON.parse(localStorage.getItem("data")) || []; 
    data.push(newProduct); 
    localStorage.setItem("data", JSON.stringify(data)); 
  } 
 
  function readProduct() { 
    let data = JSON.parse(localStorage.getItem("data")) || []; 
    setData(data); 
    localStorage.setItem("data", JSON.stringify(data)); 
    } 
  function deleteProduct(id) { 
    let data = JSON.parse(localStorage.getItem("data")) || []; 
    data.splice(id, 1); 
    localStorage.setItem("data", JSON.stringify(data)); 
    readProduct(); 
  } 
 
  return ( 
    <div className="App"> 
      <Header /> 
      <Routes> 
        <Route path="/" element={<Home addProduct={addProduct} />} /> 
        <Route 
          path="/about" 
          element={ 
            <About 
              readProduct={readProduct} 
              deleteProduct={deleteProduct} 
              data={data} 
            /> 
          } 
        /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
    </div> 
  ); 
} 
 
export default App;