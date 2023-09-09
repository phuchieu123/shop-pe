
const CartMenuItem =(props)=>{
    const {data :{src , title}} = props
    return(
        <li className="cart-menu-item">
            <span>
            <img
              style={{ width: "20px", height: "20px", borderRadius: "10rem" }}
              src={src}
              alt="icon"
            />
          </span>
          <span>{title}</span>
        </li>
    )
}
export default CartMenuItem ;
