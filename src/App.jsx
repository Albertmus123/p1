import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "./components/Routers";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routers />
    </Router>
  );
}
export default App;
