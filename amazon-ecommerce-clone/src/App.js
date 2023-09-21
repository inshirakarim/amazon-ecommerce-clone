import './App.css';
import Header from './Header'; 
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
    <Router>
        <Header />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/checkout"} element={<h1>Hello from checkout page</h1>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;