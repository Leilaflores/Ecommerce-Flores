import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route exact path='/category/:id' element={<ItemListContainer/>} />
          <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/' element={<ItemListContainer/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
