import React, { useState } from "react";
import validation from "./validation";
import { Alert, Button } from "@mui/material";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
    validation({ ...userData, [name]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label  htmlFor="email">
          USERNAME:
        </label>
        <input
          autoComplete="off"
          placeholder="email@email.com"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>
      </div>
      <div>
        <label  htmlFor="password">
          PASSWORD:
        </label>
        <input
          placeholder="password123"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>
      </div>
      <button type="submit">
        Login
      </button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
    </form>
  );
};
export default Form;
