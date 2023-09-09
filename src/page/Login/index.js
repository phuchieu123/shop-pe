import "./styles.scss"
import React, {useState} from "react";
import imgQR from "./img/Capture.PNG"
import loginByPhone from "./img/logbyphone.PNG"
import qrshopee from "./img/QRSHOPPE.PNG"
import logoshopee from "./img/logoshopee.PNG"

function Login() {
  const [log , setLog] = useState(true);
  const hanldeChangeLog = ()=>{
    setLog(!log)
  }
  return (
    <div className="">
      <div style={{display:"flex", justifyContent:"space-between" ,alignItems:"center",padding:"0 50px"}}>
        <div style={{display:"flex",alignItems:"center", fontSize:"1.5rem"}}>
          <img src={logoshopee} alt="" />
          <span >Đăng nhập</span>
        </div>
        <div style={{color:"red"}}>
          <span>Bạn cần giúp đỡ?</span>
        </div>
      </div>
      <div className="login">
        <div className="container-login">
          {
            log?
              <div className="login-box">
              <div style={{display:"flex",alignItems:"center"}}>
                  <span style={{fontSize:"1.3rem",textWrap: "nowrap",margin:"5px"}}>Đăng nhập </span>
                  <div onClick={hanldeChangeLog} className="login-by">Đăng nhập với mã QR</div>
                  <img onClick={hanldeChangeLog} src={imgQR} alt="" />
              </div>
              <form className="form-login">
                <input type="number" name="" id=""  placeholder="Enter phone nomber...."/>
                <input type="password" name="" id=""  placeholder="Enter pass word...."/>
                <input style={{backgroundColor:"#ee4d2d", color:"white",fontWeight:"700"}} type="submit" value="ĐĂNG NHẬP" />
              </form>
              <div style={{display:"flex",justifyContent:"space-between",padding:"0 10px"}}>
                <span style={{color:"#1a1a9d"}}> Quên mật khẩu</span>
                <span style={{color:"#1a1a9d"}}> Đăng nhập với SMS</span>
              </div>
              <div className="or">
                <hr backgroundColor="#dbdbdb" />
                <span className="or-span">HOẶC</span>
              </div>
              <div style={{display:"flex" ,justifyContent:"space-between" ,padding:"10px"}}>
                <div style={{display:"flex", alignItems:"center",border:"1px solid", padding:"5px 35px"}}>
                  <img style={{width:"25px", margin:"0 10px 0 0 "}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" />
                  <span> Facebook</span>
                </div>
                <div style={{display:"flex", alignItems:"center",border:"1px solid", padding:"5px 35px"}}>
                  <img  style={{width:"25px", margin:"0 10px 0 0", padding:"5px"}} src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png" alt="" />
                  <span> Google</span>
                </div>
              </div>
                <div style={{padding:"20px"}}>
                  <span style={{color:"#cccac5",margin:"20px 50px"}} >Bạn mới biết đến Shopee? <a  style={{color:"red"}} href=""> Đăng ký</a></span>
                </div>
            </div>

            :
            <div className="login-box">
            <div style={{display:"flex",alignItems:"center" ,textAlign:"center"}}>
                <span style={{fontSize:"1.3rem",textWrap: "nowrap",margin:"5px"}}>Đăng nhập </span>
                <div onClick={hanldeChangeLog} className="login-by">Đăng nhập với mật khẩu</div>
                <img onClick={hanldeChangeLog} src={loginByPhone} alt="" />
            </div>
          <div style={{width:"100%"}}>
            <img style={{margin:"10px 40px"}} src={qrshopee} alt="" />
          </div>
          <div style={{textAlign:"center"}}>
              <p>Quét mã QR bằng ứng dụng Shopee</p>
              <a href="">Làm Thế Nào Để Quét Mã?</a>
          </div>
          <div style={{padding:"20px"}}>
                  <span style={{color:"#cccac5",margin:"20px 50px"}} >Bạn mới biết đến Shopee? <a  style={{color:"red"}} href=""> Đăng ký</a></span>
                </div>
          </div>

          }
        </div>
      </div>
    </div>
  )
}

export default Login;
