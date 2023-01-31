import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navBar/NB';
import { Routes, Route } from 'react-router-dom';
import StorePage from './components/storePage/StorePage';
import BasketPage from './components/basketPage/BasketPage';
import ProductPage from './components/storePage/products/ProductPage/ProductPage';

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='*' element />
          <Route path='/store' element={<StorePage />}>
            <Route path='/store/:category' element={<StorePage />} />
          </Route>
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<BasketPage />} />
        </Routes>
      </div>
      {/* <footer className='footer'>by KolaSteklo 2023</footer> */}
    </>

  );
}

export default App;
