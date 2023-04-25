import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import Create_product from './component/create_product';
import Dashboard from './component/dashboard';
import Order from './component/order';
import Product from './component/products';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={< Header />} />
        <Route path="/create_product" element={<Create_product />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order/>}/>
        <Route path="/product" element={<Product/>}/>

        
      </Routes>
    </Router>
  );
}

export default App