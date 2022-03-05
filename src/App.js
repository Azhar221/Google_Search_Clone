import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>

      <Home />
    </div>
  );
}

export default App;
