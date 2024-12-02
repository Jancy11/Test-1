import React from "react";
import { useState } from "react";

const Home =()=>{

  const [formInput,setFormInput] = useState({
    name:"",
    age:"",
    email:""
  });

 const handleChange =(event)=>{
  console.log(event.target.value);
 }
    return(
      <div >
       <form>
         <label>Name</label>
         <br />
         <input type="text" value={formInput.name} onChange={handleChange}/><br />
         <label>Age</label>
         <br />
         <input type="Number" value={formInput.age} onChange={handleChange}/><br />
         <label>email</label>
         <br />
         <input type="text" value={formInput.email} onChange={handleChange}/><br />
         <button onClick={handleChange()}>Add</button>
       </form>
      </div>
    );
  }
  export default Home;