// import React,{useState} from 'react';

import Form_2 from "./Form_2"


// function Demo() {

//     const [otp, setOtp] = useState("");
// const [minutes, setMinutes] = useState(1);
// const [seconds, setSeconds] = useState(30);

// useEffect(() => {
//   const interval = setInterval(() => {
//     if (seconds > 0) {
//       setSeconds(seconds - 1);
//     }

//     if (seconds === 0) {
//       if (minutes === 0) {
//         clearInterval(interval);
//       } else {
//         setSeconds(300);
//         setMinutes(minutes - 1);
//       }
//     }
//   }, 1000);
//   const resendOTP = () => {
//     setMinutes(1);
//     setSeconds(30);
//   };

//   return () => {
//     clearInterval(interval);
//   };
// }, [seconds]);

//   return (
   

//     <div className="container">
//       <div className="card">
//         <h4>Verify OTP</h4>

//         <input
//       placeholder="Enter OTP"
//       value={otp}
//       onChange={({ target }) => {
//         setOtp(target.value);
//       }}
//     />

//     <div className="countdown-text">
//       {seconds > 0 || minutes > 0 ? (
//         <p>Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
//           {seconds < 10 ? `0${seconds}` : seconds}
        
//       ) : (
//         <p>Didn't recieve code?</p>
//       )}

//       <button
//         disabled={seconds > 0 || minutes > 0}
//         style={{
//           color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
//         }}
//         onClick={resendOTP}
//       >
//         Resend OTP
//       </button>
//     </div>

//     <button className="submit-btn">SUBMIT</button>
//   </div>
//     </div>
   
//   );
// }

// export default Demo;






// -------------------------

// Form_2


// import React,{ useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Form.css';
// import img1 from './images/color_1.png';
// import img2 from './images/cup_3.png';
// import img3 from './images/cloth_1.png';
// import img4 from './images/moving_box.png';
// import img5 from './images/Girl.png';
// import img6 from './images/Cash.png';
// import img7 from './images/money.png';
// import img8 from './images/tall_books.png';
// import {AiFillInfoCircle} from "react-icons/ai";
// import { useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';

// const Form_2 = () => {

//     const [classId,setClassId]=useState("");
//     const [classErr,setClassErr]=useState(false);
    
//     const navigate=useNavigate();

//     const handleClickNext1=()=>{
//         navigate("/form_3");
//     }

//     function classHandler(e){
//         let item=e.target.value;
//         if(item.length>6 )
//         {
//            setClassErr(true)
//         }
     
//         else{
//             setClassErr(false)
//         }
//         setClassId(item)
//     }

//     return (
//         <>
//             <div className='Container-fluid'>
//                 <div className='cash_img'>
//                     <img src={img6} alt="" class="img-fluid right-img top-img z-1 d-none d-md-inline" />
//                 </div>
//                 <div className='money_img'>
//                     <img src={img7} alt="" class="img-fluid left-img d-none d-md-inline" />
//                 </div>
//                 <div className='tall_books_img'>
//                     <img src={img8} alt="" class=" img-fluid right-img bottom-img text-center d-none d-md-inline" />
//                 </div>
//                 <div className='cover'>
//                     <div className='row'>
//                         <div className='col-md-6 left_form_1'>
//                             <div className='color_img'>
//                                 <img src={img1} alt="" class="img-fluid" />
//                             </div>
//                             <div className='cloth_1_img'>
//                         <img src={img3} alt=""  class="img-fluid"/>
//                         </div>


//                             <div className='text_1'>
//                                 <p className='para_2'>CareerManiaa<br></br>
//                                     Partner<br></br>
//                                     Manage your Classroom on CareerManiaa
//                                 </p>
//                             </div>

//                             <div className='cup_3_img'>
//                                 <img src={img2} alt="" class="img-fluid" />
//                             </div>

//                             <div className='moving_box_img '>
//                                 <img src={img4} alt="" class="img-fluid" />
//                             </div>

//                             <div className='girl_img '>
//                                 <img src={img5} alt="" class="img-fluid" />
//                             </div>



//                         </div>
//                         <div className='col-md-6 right_form_1'>
//                             <h1 className='text_2'>Get Started</h1>
//                             <p className='para_1 px-5'>The next step is to, Enter a registered  mobile number or Class ID <AiFillInfoCircle/></p>
                           
//                             <Form>
//                                 {['radio'].map((type) => (
//                                     <div key={`inline-${type}`} className="mb-3">
//                                         <Form.Check
//                                             inline
//                                             label="Class ID"
//                                             name="group1"
//                                             type={type}
//                                             id={`inline-${type}-1`}
//                                             // className=''
//                                             // onClick={UniqueId}
//                                         />

//                                         <Form.Check
//                                             inline
//                                             label="Mobile No"
//                                             name="group1"
//                                             type={type}
//                                             id={`inline-${type}-2`}
//                                             // className='Mobile'
//                                             // onClick={Mobile}
//                                         />

//                                     </div>
//                                 ))}
//                             </Form>

//                             <input type="text " placeholder='Enter Classes ID/Mobile Number ' class="input_1 " id="" onChange={classHandler} /><br/>
//                            <p className='para_5 '>{classErr?<span>Class ID not found</span>:""}</p> 
//                             <button onClick={handleClickNext1}  class="btn btn-lg btn-danger btn_1">Continue</button>
//                             <p className='para_4 mt-5'>Getting your courses listed on CareerManiaa ?? </p>
//                             <p className='para_1 px-5  '><u>Join our partner network</u></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>



//         </>
//     )
// }

// export default Form_2;



import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function App() {
  const [otpInput, setOtpInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [timer, setTimer] = useState(60);

  const handleOtpChange = (e) => {
    const otp = e.target.value;
    setOtpInput(otp);

    if (otp.length === 4) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleButtonClick = () => {
    setTimer(60);
    // Simulate OTP validation
    if (otpInput !== "1234") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid OTP!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "OTP verified!",
      });
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      setButtonDisabled(false);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <input type="text" value={otpInput} onChange={handleOtpChange} />
      <button onClick={handleButtonClick} disabled={buttonDisabled}>
        {buttonDisabled ? `Resend in ${timer}s` : "Resend"}
      </button>
    </div>
  );
}

export default App;
