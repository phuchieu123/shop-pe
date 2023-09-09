import "./styles.scss"
import {IoIosChatboxes} from "react-icons/io"
import {BiHomeAlt2} from "react-icons/bi"
import shopeeGurant from "./img/shopee.png"
function CartItem() {
return <div className="Cart-item">
    <div className="Cart-item-product">
        <div style={{display:"flex", justifyContent:"space-between",
    borderBottom:" 1px solid rgba(0,0,0,.09)", padding:" 12px",margin:"20px"
    }}>
            <div style={{}}>
                <span style={{backgroundColor:"red",padding:"4px",color:"white", margin:"0 3px" }}>yêu thích</span>
                <span style={{fontWeight:"700" }}>giayBOM</span>
                <span style={{color:"white" ,backgroundColor:"#ee4d2d ",padding:"4px", margin:"0 3px"}}>
                    <IoIosChatboxes /> chat</span>
                <span
                    style={{padding:"6px 5px 4px", margin:"0 3px",border:"0.5px solid #555",color:"##555",fontSize:"12px"}}>
                    <BiHomeAlt2 /> xem shop</span>
            </div>
            <div className="">
                <span style={{color:"red"}}>VẬN CHUYỂN</span>
            </div>
        </div>
        <div style={{margin:"20px 20px 2px" ,padding:"5px",display:"flex" ,justifyContent:"space-between"}}>
            <div style={{display:"flex" }}>
                <img style={{width:"80px" ,height:"80px", margin:"15px 5px"}}
                    src="https://down-vn.img.susercontent.com/file/sg-11134201-22120-nx03d7y9ynlva7_tn" alt="" />
                <div style={{margin:"0 10px"}}>
                    <p style={{ fontSize:"18px", padding:"0"}}>Giày Thể Thao Màu Trắng Đen Kem Chất Liệu Da PU GiayBOM
                        GB Warriors B888</p>
                    <span style={{color:"#757575" ,fontSize:"1rem"}}>Phân loại hàng: Kem,36</span><br />
                    <span>x1</span>
                </div>
            </div>
            <div style={{display:"flex" ,alignItems:"center"}}>
                <span style={{color:"#757575", padding:"0 4px", textDecoration:"line-through"}}>₫320.000</span>
                <span style={{color:"red"}}>₫229.000</span>
            </div>
        </div>
    </div>
    <div style={{backgroundColor:"white"}}>
        <div style={{padding:"24px 24px 12px", textAlign:"right"}}>
            <span style={{display:"flex" ,justifyContent:"right" }}>
                <img style={{width:"20px", height:"20px",margin:"2px"}} src={shopeeGurant} alt="" />
                <span style={{padding:"3px"}}>Thành tiền :</span>
                <span style={{color:"red"}}> <sup> đ </sup><span style={{fontSize:"1.5rem"}}>245.500</span></span>
            </span>
        </div>
        <div style={{padding:"20px" ,display:"flex",justifyContent:"space-between"}}>
            <span style={{color:"rgb(152 146 146)"}}>Đơn hàng sẽ được chuẩn bị và chuyển đi trước <span>10/9/2023</span> </span>
            <div className="">
                <button
                    style={{padding:"10px 20px", margin:"5px", backgroundColor:"#ee4d2d" ,border:"1px solid rgb(234 234 234)" ,color:"white", borderRadius:"2px"}}>Liên
                    Hệ Người Bán</button>
                <button
                    style={{padding:"10px 20px", margin:"5px", backgroundColor:"white" ,border:"1px solid rgb(234 234 234)", borderRadius:"2px"}}>Hủy
                    Đơn Hàng</button>
            </div>
        </div>
    </div>
</div>;
}

export default CartItem;