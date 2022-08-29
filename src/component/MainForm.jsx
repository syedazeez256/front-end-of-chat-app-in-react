import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddRoom from "./AddRoom";

const MainForm = () => {
  const navigate = useNavigate();
  const [errorName, setErrorName] = useState("");
  const [errorRoom, setErrorRoom] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    name: "",
    room: "",
  });
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const validation = () => {
    if (!data.name) {
      setErrorName("Please enter name");
      return false;
    }
    if (!data.room) {
      setErrorRoom("Please enter room");
      return false;
    }
    if (data.room && data.name) {
      setErrorName("");
      setErrorRoom("");
      setError(true);
      return true;
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      navigate(`/chat/${data.room}`, { state: data });
    }
  };
  const addRoom = (e) => {
    e.preventDefault();
    navigate("/addroom");
  };
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "20px",
          backgroundColor: "red",
        }}
      >
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1 text-success">CHAT APP</span>
        </nav>
      </div>
      <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
        <form onSubmit={handleForm}>
          <div className="form-group mb-4">
            <h2 className="text-success mb-4">Welcome to Chat club</h2>
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control bg-light"
              name="name"
              placeholder="Enter your name"
              onChange={handleInput}
            />
            {!error ? (
              <p className="text-danger bg-light px-2">{errorName}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-4">
            <select
              className="form-select bg-light"
              name="room"
              onChange={handleInput}
            >
              <option value="">Select Room</option>
              <option value="gaming">Gaming</option>
              <option value="coding">Coding</option>
              <option value="socialMedia">Social Media</option>
              <option value="graphicDesigner">Graphic Desginer</option>
            </select>
            <button style={{ border: "none", width: "30px" }} onClick={addRoom}>
              +
            </button>
            {!error ? (
              <p className="text-danger bg-light px-2">{errorRoom}</p>
            ) : (
              ""
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 mb-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainForm;
