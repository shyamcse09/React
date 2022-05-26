
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
//import ProductComponent from './containers/ProductComponent';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route> 404 Not Found! </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
