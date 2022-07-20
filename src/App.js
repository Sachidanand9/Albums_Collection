import { Routes, Route } from 'react-router-dom'
import Album from './Albums';
import Home from './Home';
import Navbar from './Navbars';
import Newalbum from './NewAlbum';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/album' element={<Album />} />
        <Route path='/newalbum' element={<Newalbum />} />
      </Routes>
    </div>
  );
}

export default App;
