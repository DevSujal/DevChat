import { Outlet } from "react-router-dom";
import "./App.css";
import { Form } from "./pages";

function App() {
  return (
    <div className="bg-blue-400 w-screen h-screen">
      <Outlet />
    </div>
  );
}

export default App;
