import {Home, Login, SignUp} from "./pages/index";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
