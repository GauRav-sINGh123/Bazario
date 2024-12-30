import  { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import { Loader } from "./components/index";

 
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader/>}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="/signin"
          element={
            <Suspense fallback={<Loader/>}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
