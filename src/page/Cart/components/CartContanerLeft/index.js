import "./styles.scss";
import { BsFillPencilFill } from "react-icons/bs";
import CartMenuItem from "./CartMenuItem";
const CartContanerLeft = () => {
  const ListCartMenuItem =[
    {
      src : "https://down-vn.img.susercontent.com/file/sg-11134004-7rbk0-lkuzkqvizep4b0",
      title: "9.9 Shopee Live Làm Đẹp"
    },
    {
      src : "https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4",
      title: "Tài khoản của tôi"
    },
    {
      src : "https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078",
      title: "Đơn Mua"
    },
    {
      src : "https://down-vn.img.susercontent.com/file/e10a43b53ec8605f4829da5618e0717c",
      title: "Thông báo"
    },
    {
      src : "https://down-vn.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748",
      title: "Kho Voucher"
    },
    {
      src : "https://down-vn.img.susercontent.com/file/a0ef4bd8e16e481b4253bd0eb563f784",
      title: "Shopee Xu"
    },
  ]
  return (
    <div className="cart-contaner-left">
      <div className="profile">
        <img
          className="avatar"
          src="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/hinh-nen-soi-dep-cho-dien-thoai-2.jpg"
          alt="avatar"
        />
        <div className="username">
          <h3 style={{ margin: "5px" }}>username</h3>
          <span>
            <BsFillPencilFill style={{ fontSize: "12px", margin: "0 3px" }} />
          </span>
          <span style={{ margin: "0 3px" }}>Sửa Hồ Sơ</span>
        </div>
      </div>
      <div className="cart-menu">
        <ul className="cart-menu-list">
        {ListCartMenuItem.map((it)=>{
          return (
              <CartMenuItem data={it}/>
          )
        })
        }
        </ul>
      </div>
    </div>
  );
};
export default CartContanerLeft;
