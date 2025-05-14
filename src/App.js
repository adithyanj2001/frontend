// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Home from './component/home/home';
import Product from './component/product/product';
import Cart from './component/cart/cart';


function App() {
  return (
 <Router>
      <div className="navbar">
        <div className="navbar-left">
        
          <h1>
              
            <span className="T1">Lap</span>
            <span className="T2">Store</span>
          </h1>
        </div>
        <div className="navbar-right">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/products">Products</Link>
           <Link className="nav-link" to="/cart">Cart</Link>
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

