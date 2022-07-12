import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart';
import CartContext from './store/CartContext';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const index = cart.findIndex(product => product.id == item.id);   
    if(index == -1){
      cart.push({...item, quantity})
    }
    else{
      const newCart = cart;
      newCart[index].quantity += quantity; 
      setCart(newCart);
    }
  }

  const removeItem = (itemId) => {
    const index = cart.findIndex(product => product.id == itemId);   
    if(index != -1){
      const newCart = cart;
      newCart.splice(index,1);
      setCart(newCart);
    }
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (itemId) => {
    const index = cart.findIndex(product => product.id == itemId);
    if(index == -1){
      return false;
    }
    else{
      return true;
    }
  }

  return (
    <div className="App">
      <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/category/:id' element={<ItemListContainer/>} />
            <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
            <Route exact path='/cart' element={<Cart/>} />
            <Route exact path='/' element={<ItemListContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
