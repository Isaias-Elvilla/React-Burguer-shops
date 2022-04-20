//import './App.css';
import React  from 'react';
import { Navbar } from './Components/NavBar/navbar';
import { ItemListContainer } from './Components/itemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './cartcontext/CartContext';
import { CartShop } from './Components/cartshop/CartShop';
import {NotFound} from './Components/notfound/NotFound';
import {Checkout} from './Components/Checkout/checkout'; 

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route exact path="/category/:id" component={ItemListContainer} />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={CartShop}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route path = '*' component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
