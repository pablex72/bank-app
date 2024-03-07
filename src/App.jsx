
import './App.css'
import Home from './Components/Home.jsx';
// import Add from './Components/Add.jsx';
import Header from './Components/Header.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Components/Create.jsx';

import Approved from './Components/Approved.jsx';
import Sidebar from './Components/Sidebar.jsx';

function App() {

  return (
    <div>
      <div >
        <Header />
      </div>
      <Router>
        <div className="d-flex" >
          <div className="col-auto" >
            <Sidebar />
          </div>
          <div>
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/solicitudes" element={<Home />} />
            <Route path="/aprobados" element={<Approved />} />
            <Route path="/sidebar" element={<Sidebar />} />
          </Routes>
          </div>
        </div>
      </Router>

    </div>

  )
}

export default App
