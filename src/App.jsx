import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Image from './pages/ImageGenerator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image" element={<Image />} />
    </Routes>
  );
}

export default App;
