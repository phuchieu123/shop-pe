import "./styles.scss"
import CartContanerLeft from "./components/CartContanerLeft";
import CartContanerRight from "./components/CartContanerRight";

function Cart() {
return <div className="cart">
  <div className="cart-container">
    <CartContanerLeft/>
   <CartContanerRight/>
  </div>
</div>;
}

export default Cart;