
import { useState } from 'react';
import Header from './components/Layout/Header/Header';
import MealsSummary from './components/Meals/MealsSummary/MealsSummary';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartPovider';
import classes from './App.module.css';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const showCartHandler = () => {
    setIsCartVisible(true)
  }

  const hideCartHandler = () => {
    setIsCartVisible(false)
  }

  return (
    <CartProvider className={classes.app}>
      {isCartVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <div className={classes.container}>
        <MealsSummary />
        <aside>
          No info for the momment
        </aside>
        <main>
          <Meals />
        </main>
      </div>
      <footer>
        footer
      </footer>
    </CartProvider>
  );
}

export default App;
