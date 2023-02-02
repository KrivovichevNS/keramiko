import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navBar/NB';
import { Routes, Route } from 'react-router-dom';
import StorePage from './components/storePage/StorePage';
import BasketPage from './components/basketPage/BasketPage';
import ProductPage from './components/storePage/products/ProductPage/ProductPage';
import MainPage from './components/MainPage/MainPage';
import Modal from './components/basketPage/Modal';
import LoginPage from './components/Admin/LoginPage/LoginPage';
import AdminPage from './components/Admin/AdminPage/AdminPage';
import OrderPage from './components/Admin/OrderPage/OrderPage';

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='*' element={<MainPage />} />
          <Route path='/success' element={<Modal />} />
          <Route path='/admin/login' element={<LoginPage />} />
          <Route path='/admin/control' element={<AdminPage />} />
          <Route path='/admin/order/:id' element={<OrderPage />} />
          {/* <Route path='/store' element={<StorePage />}> */}
          <Route path='/store/:category' element={<StorePage />} />
          {/* </Route> */}
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='*' element={<MainPage />} />
          <Route path='/cart' element={<BasketPage />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
