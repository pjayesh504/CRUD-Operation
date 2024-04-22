import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [age, SetAge] = useState();
  const Navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createUser", { name, email, age })
      .then((result) => {
        console.log(result);
        Navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center alian-item-center">
      <div className="w-50 bg-white rounded p-3">
        <h2 className="text-center">Add User</h2>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => SetName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              onChange={(e) => SetAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
