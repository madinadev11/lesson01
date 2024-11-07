import React, { useState } from "react";  
  
const Home = ({ addProduct }) => {  
  const [state, setState] = useState("");  
  
  //   function postProduct() {  
  //     if (state === "") {  
  //       alert("404");  
  //     } else {  
  //       addProduct(state);  
  //       setState("");  
  //     }  
  //   }  
  
  return (  
    <section id="home">  
      <div className="container">  
        <div className="home">  
          <input  
            type="text"  
            placeholder=""  
            onChange={(e) => setState(e.target.value)}  
            value={state}  
          />  
          <button onClick={() => addProduct({ name: state })}>Add</button>  
        </div>  
      </div>  
    </section>  
  );  
};  
  
export default Home;