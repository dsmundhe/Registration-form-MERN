import React, { useState } from "react";
import axios from "axios";
export default function Signup() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reigter = await axios.post("http://localhost:5000/register", value);
    console.log(reigter.data);
    setValue({
      name: "",
      email: "",
      password: "",
    });
    alert("Acount created");
  };
  return (
    <>
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="name"
            onChange={handleChange}
            value={value.name}
            name="name"
          ></input>
          <input
            placeholder="email"
            onChange={handleChange}
            value={value.email}
            name="email"
          ></input>
          <input
            placeholder="password"
            value={value.password}
            onChange={handleChange}
            name="password"
          ></input>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}
