import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
