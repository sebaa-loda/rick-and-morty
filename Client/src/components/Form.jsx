import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  };

  const [errors, setErrors] = useState({});
  const handleOnSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div className="form">
      <form onSubmit={handleOnSubmit}>
        <div className="user-box">
          <input
            required=""
            type="text"
            name="email"
            value={userData.email}
            placeholder="access@gmail.com"
            onChange={handleChange}
          ></input>
          <label htmlFor="email">Email</label>
          <p className="p">{errors?.email}</p>
          <br />
        </div>
        <div className="user-box">
          <input
            required=""
            name="password"
            type="password"
            value={userData.password}
            placeholder="password01"
            onChange={handleChange}
          ></input>
          <label htmlFor="password">Password</label>
          <p className="p">{errors?.password}</p>
        </div>
        <div className="div-button">
          <button onSubmit={handleOnSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
