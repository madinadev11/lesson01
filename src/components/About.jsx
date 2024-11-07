import React, { useEffect } from "react";  
  
const About = ({ readProduct, data, deleteProduct }) => {  
  useEffect(() => {  
    readProduct();  
  }, []);  
  console.log(data);  
  
  return (  
    <div>  
      {data.map((el, index) => (  
        <>  
          <h1>{el.name}</h1>  
          <button onClick={() => deleteProduct(index)}>Delete</button>  
        </>  
      ))}  
    </div>  
  );  
};  
  
export default About;