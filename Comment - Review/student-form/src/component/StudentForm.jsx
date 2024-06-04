import React from "react";
import { useState } from "react";

function StudentForm() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    select: "",
    radio: false,
  });

  const handlechange = (e) => {
    const { value, type } = e.target;
    const newValue = type === "radio" ? value : value;
    setdata({ ...data, [e.target.name]: newValue });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div style={{border:"2px solid grey",width:"500px",height:"400px",backgroundColor:"teal", color:"black"}}>
      <form onSubmit={handlesubmit} className="form" style={{marginTop:"25px",marginBottom:"0px"}}>
        
        {/* student name */}
        <label htmlFor="name" >Name : </label>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter Your Name"
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />


        {/* student email address */}
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter Your Email"
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />


        {/* password */}
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Enter Your Password"
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />


        {/* select city */}
        <label htmlFor="select">City : </label>
       
        <select
          name="select"
          className="select"
          value={data.select}
          onChange={(e) => handlechange(e)}
        >
          <option value="">Select Your City</option>
          <option value="Surat">Surat</option>
          <option value="Ahemedabad">Ahemedabad</option>
          <option value="Gandhinagar">Gandhinagar</option>
          <option value="Kutch">Kutch</option>
        </select>
        <br />
        <br />


        {/* gender */}
        <label>Gender : -</label>
        <br />
        <label>Male</label>
        <input
          type="radio"
          name="radio"
          value="male"
          onChange={(e) => handlechange(e)}
        />
        <label>Female</label>
        <input
          type="radio"
          name="radio"
          value="female"
          onChange={(e) => handlechange(e)}
        />
       

        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default StudentForm;