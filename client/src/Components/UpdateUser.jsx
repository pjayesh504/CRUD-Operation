import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [age, SetAge] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getUser/" + id)
      .then((result) => {
        console.log(result);
        SetName(result.data.name);
        SetEmail(result.data.email);
        SetAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/updateUser/" + id, { name, email, age })
      .then((result) => {
        console.log(result);
        Navigate("/");
        return true;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center alian-item-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Update User</h2>
        <form onSubmit={update}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name || ""}
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
              value={email || ""}
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
              value={age || ""}
              onChange={(e) => SetAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
