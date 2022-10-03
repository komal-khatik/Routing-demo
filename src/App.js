import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Customers from './pages/Customers';
import Products from './pages/Products';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
    {/* This is Routing project */}
    <h3 style={{color:"red"}}> </h3>
    <Routes>
      <Route path="/customers"
      element={<Customers></Customers>}></Route>
        <Route path="/products"
        element={<Products></Products>}></Route>
    </Routes>
    </div>
  );
}

export default App;
