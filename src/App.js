// STYLES
import './App.css';

// ROUTES
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

//ASSETS


//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ProductsPage from './pages/Products';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/inside" element={<ItemDetailContainer />} />
      <Route path="*" element={<h1>404 Error</h1>} />
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
