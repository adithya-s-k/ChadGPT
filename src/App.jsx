import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Image from './pages/ImageGenerator';
import Select from './pages/Selection';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image" element={<Image />} />
      <Route path="/select" element={<Select />} />
    </Routes>
  );
}

export default App;
