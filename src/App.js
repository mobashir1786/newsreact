import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './pages/homepage/Home';
import India from './pages/india/India';
import Technology from './pages/technology/Technology';
import World from './pages/world/World';
import City from './pages/city/City';
import NewsDet from './component/newsDetail/NewsDet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/india' element={<India />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/world' element={<World />} />
          <Route path='/city' element={<City />} />
          <Route path='/newsdetail' element={<NewsDet/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
