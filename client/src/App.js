import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Landing/Home";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Register/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
