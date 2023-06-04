import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Router>
    </BrowserRouter>
  );
}
