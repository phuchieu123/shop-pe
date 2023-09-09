import "./styles.scss"
import AllProducts from "./components/AllProducts"
const CartContanerRight = ()=>{
    return (
        <div className="cart-contaner-right">
          <div className="mini-nav-cart">
            <ul className="list-mini-nav-cart">
              <li className="mini-nav-cart-item cart-item-active">Tất cả</li>
              <li className="mini-nav-cart-item">Chờ thanh toán</li>
              <li className="mini-nav-cart-item">Vận chuyển</li>
              <li className="mini-nav-cart-item">Đang giao</li>
              <li className="mini-nav-cart-item">Hoàn thành</li>
              <li className="mini-nav-cart-item">Đã hủy</li>
              <li className="mini-nav-cart-item">Trả hàng/Hoàn tiền</li>
            </ul>
          </div>
          <AllProducts/>
      </div>
    )
}
export default CartContanerRight;