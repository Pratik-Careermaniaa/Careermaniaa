// import React, { useState } from "react";
// import OtpTimer from "../OtpTimer/OtpTimer";
// import "./OtpKyc.css";
// import { Button, Form } from "react-bootstrap";
// import WrongOtpMobile from "../OtpBoxMobile/WrongOtpMobile";
// import WrongOtpMobileKyc from "./WrongOtpMobileKyc";
// import axios from "axios";

// // const trueOtp = [1, 2, 3, 4, 5, 6];
// const Form_3_1 = ({
//   // otpMobileKycVerification,
//   // setOtpMobileKycVerification,
//   otpErrorKycMobile,
//   setOtpErrorKycMobile,
//   otpVerified,
//   setOtpVerified,
// }) => {
//   const [
//     otpMobileKycVerification,
//     setOtpMobileKycVerification,
//   ] = useState(new Array(6).fill(""));
//   const verifyKycHandler = () => {
//     // console.log("object");
//     let otpString1 =
//       otpMobileKycVerification.join("");
//     axios
//       .post(
//         "#",
//         {
//           mobile: localStorage.getItem(
//             "userMobileNumber"
//           ),
//           OTP: otpString1,
//           otp_type: "2",
//           activity_type: "11",
//         }
//       )
//       .then((res) => {
//         setOtpVerified(true);
//       })
//       .catch((err) => {
//         console.log(err);
//         // setOtpError(true);
//         // setVerifiedOtpEmail(false);
//       });
//   };

//   const handleChangeOtp = (element, index) => {
//     if (isNaN(element.value)) return false;

//     setOtpMobileKycVerification([
//       ...otpMobileKycVerification.map((d, idx) =>
//         idx === index ? element.value : d
//       ),
//     ]);

//     if (element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };
//   // console.log(otpErrorKycMobile);
//   return (
//     <div className="container">
//       {otpVerified ? (
//         ""
//       ) : (
//         <div className="d-flex flex-row justify-content-center align-items-center">
//           <span
//             style={{
//               fontSize: "14px",
//               fontWeight: "400",
//             }}
//           >
//             Confirmation OTP Expires in{" "}
//           </span>
//           <span className="text-dark">
//             <OtpTimer />
//           </span>
//         </div>
//       )}

//       <div className="d-flex justify-content-center">
//         {otpMobileKycVerification.map(
//           (data, index) => {
//             return (
//               <>
//                 {otpErrorKycMobile ? (
//                   <WrongOtpMobileKyc
//                     setOtpErrorKycMobil={
//                       setOtpErrorKycMobile
//                     }
//                   />
//                 ) : (
//                   <>
//                     <Form.Control
//                       style={{
//                         fontSize: "26px",
//                       }}
//                       className="otp-field text-center my-2"
//                       type="text"
//                       name="otp"
//                       maxLength="1"
//                       key={index}
//                       onChange={(e) =>
//                         handleChangeOtp(
//                           e.target,
//                           index
//                         )
//                       }
//                       onFocus={(e) =>
//                         e.target.select()
//                       }
//                     ></Form.Control>
//                   </>
//                 )}
//               </>
//             );
//           }
//         )}
//       </div>
//       <div className="d-flex justify-content-center flex-column align-items-center">
//         <span
//           style={{
//             fontSize: "14px",
//             fontWeight: "400",
//           }}
//           className=""
//         >
//           Didn't Recieve OTP?{" "}
//           <a className="text-aqua" href="#">
//             Resend
//           </a>
//         </span>
//         {otpVerified ? (
//           <Button
//             disabled
//             className="border border-white px-5 py-2 w-75"
//             style={{
//               backgroundColor: "rgb(28,155,171)",
//             }}
//           >
//             Verified
//           </Button>
//         ) : (
//           <Button
//             className="login-btn bg-white px-5 py-2 w-75"
//             onClick={verifyKycHandler}
//           >
//             Verify
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Form_3_1;