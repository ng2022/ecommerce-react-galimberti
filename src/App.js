// STYLES
import './App.css';

// ROUTES
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//ASSETS


//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ProductsPage from './pages/Products';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:category' element={<ProductsPage />} />
      <Route path='/product/:id' element={<ItemDetailContainer />} />
      <Route path='*' element={<h1>404 Error</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
