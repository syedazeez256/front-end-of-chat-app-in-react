import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainForm from "./component/MainForm";
import ChatForm from "./component/ChatForm";
import AddRoom from "./component/AddRoom";

function App() {
  return (
    <div
      className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Router>
        <Routes>
          <Route index element={<MainForm />} />
          <Route path="/chat/:roomName" element={<ChatForm />} />
          <Route path="/addroom" element={<AddRoom />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
