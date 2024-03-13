import './App.css';
import Login from "./components/Login"
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/home' Component={Home}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
