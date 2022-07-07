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
import ThemeProvider from './context/ThemeContext';
import CartProvider from './context/CartContext';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products/:category' element={<ProductsPage />} />
              <Route path='/product/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>404 Error</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
