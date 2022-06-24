import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Create } from './Create';
import { Edit } from './Edit';
import { Delete } from './Delete';

function App() {
  return (
    <div>
      <nav className='navbar bg-dark navbar-expand-lg navbar-dark'>
        <div className='container'>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">Create</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
