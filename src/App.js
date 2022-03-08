import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<h1>this is search page</h1>} />
        {/* <Route path="/about" element={<Home />} /> */}
      </Routes>

    </div>
  );
}

export default App;
