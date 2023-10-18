import './App.css';
import Header from './Header'; 
import Home from './Home';
import Checkout from './Checkout';
import LogIn from './LogIn';
import Payment from './Payment';
import BillingAddress from './BillingAddress'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
    <Router>
        <Header />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<LogIn />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/payment"} element={<Payment />} />
            <Route path={"/billingaddress"} element={<BillingAddress />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;