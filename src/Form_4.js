import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import img1 from './images/color_1.png';
import img2 from './images/cup_3.png';
import img3 from './images/cloth_1.png';
import img4 from './images/moving_box.png';
import img5 from './images/Girl.png';
import img6 from './images/Cash.png';
import img7 from './images/money.png';
import img8 from './images/tall_books.png';  
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import {BiCheckCircle } from "react-icons/bi";
// import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
import PulseLoader from "react-spinners/PulseLoader";
import Swal from 'sweetalert2';
// import {BsDashLg} from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


// const override = css`
//   display: block;
//   margin: 0 auto;
// `;

const Form_4 = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 5000)
    // }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(true)
    //         // alert("login successful")
    //     }, 6000);
    //     return () => 
    //         // alert("login successful");
    //         clearTimeout(timer);
           
        
    // }, [])

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
        // setPasswordInput("");
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

  

    return (
        <>
            <div className='container-fluid'>
                <div className='cash_img'>
                    <img src={img6} alt="" className="img-fluid right-img top-img z-1 d-none d-md-inline" />
                </div>
                <div className='money_img'>
                    <img src={img7} alt="" className="img-fluid left-img d-none d-md-inline" />
                </div>
                <div className='tall_books_img'>
                    <img src={img8} alt="" className=" img-fluid right-img bottom-img text-center d-none d-md-inline" />
                </div>
                <div className='cover'>
                    <div className='row'>
                        <div className='col-md-6 left_form_1'>
                            <div className='color_img'>
                                <img src={img1} alt="" className="img-fluid" />
                            </div>
                            <div className='cloth_1_img'>
                                <img src={img3} alt="" className="img-fluid" />
                            </div>


                            <div className='text_1'>
                                <p className='para_2'>CareerManiaa<br></br>
                                    Partner<br></br>
                                    Manage your Classroom on CareerManiaa
                                </p>
                            </div>

                            <div className='cup_3_img'>
                                <img src={img2} alt="" className="img-fluid" />
                            </div>

                            <div className='moving_box_img '>
                                <img src={img4} alt="" className="img-fluid" />
                            </div>

                            <div className='girl_img '>
                                <img src={img5} alt="" className="img-fluid" />
                            </div>



                        </div>
                        <div className='col-md-6 right_form_1'>
                            <a href="/"> <FaLongArrowAltLeft className="arrow_1" style={{ color: "black" }} /></a>
                            
                            {showSuccessMessage && 
                                <div className='message_login'>
                                <div className='message_login_icon'><BiCheckCircle  style={{color:"#DA0B4E"}}/></div> <p className='message_login_text '>Log-in Successfully</p>
                            </div>
                            }
                            
                            {/* <h1 className='text_3'>Enter OTP</h1> */}
                            <p className='para_3'>Enter password for <span className='color_dark'>Class ID </span>
                            </p>
                            {/* <p className='para_6 mt-4 '><BsDashLg size='90' /> <BsDashLg size='90' /><BsDashLg size='90' /><BsDashLg size='90' /></p>  */}
                            {/* <p className='para_6 mt-4 '><AiOutlineLine size='90' /> <AiOutlineLine size='90' /><AiOutlineLine size='90' /><AiOutlineLine size='90' /></p>  */}

                            <div className=" my-1 mx-5">
                                <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control input_2    " placeholder="Password" />

                                <div className="input-group-btn">
                                    <button className="btn eyepassword1" onClick={togglePassword}>
                                        {passwordType === "password" ? <IoMdEye /> : <IoMdEyeOff />}
                                    </button>
                                </div>
                            </div>


                            {/* <input type="text" placeholder='Enter Your Password' className="input_2 " />
                            <div className='Eye_password'><IoMdEye /></div> */}

                            <div className='forgetpass'>
                                <span >Forgot <a href="form_2">password?</a></span>
                            </div>

                            {loading ?
                                <PulseLoader color=" #C60A47" loading={loading}  size={20} />
                                :<button  className="btn btn-secondary btn-lg btn_4">Login</button>
                            }
                            
                            {/* <button onClick={handleSubmit} className="btn btn-secondary btn-lg btn_4">Login</button> */}

                            {/* <p className='para_7'><u>Resend OTP</u></p> */}
                            {/* <button onClick={handleSubmit} className="btn btn-secondary btn-lg btn_4">Login</button> */}




                            <hr />
                            {/* <Button variant="outline-danger btn-lg btn_2">Login with password</Button>{' '}
                            <p className='para_8'>By logging in, I agree with CareerManiaa'sterms & conditions</p> */}

                            <p className='para_4 my-5 '>Getting your courses listed on CareerManiaa ?? </p>
                            <p className='para_1 px-5 text-center '><u>Join our partner network</u></p>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Form_4;
