import React from 'react'
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
import { IoMdEye } from "react-icons/io";
// import {BsDashLg} from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Form_7 = () => {
    const navigate = useNavigate();

  

    return (
        <>
            <div className='Container-fluid'>
                <div className='cash_img'>
                    <img src={img6} alt="" class="img-fluid right-img top-img z-1 d-none d-md-inline" />
                </div>
                <div className='money_img'>
                    <img src={img7} alt="" class="img-fluid left-img d-none d-md-inline" />
                </div>
                <div className='tall_books_img'>
                    <img src={img8} alt="" class=" img-fluid right-img bottom-img text-center d-none d-md-inline" />
                </div>
                <div className='cover'>
                    <div className='row'>
                        <div className='col-md-6 left_form_1'>
                            <div className='color_img'>
                                <img src={img1} alt="" class="img-fluid" />
                            </div>
                            <div className='cloth_1_img'>
                                <img src={img3} alt="" class="img-fluid" />
                            </div>


                            <div className='text_1'>
                                <p className='para_2'>CareerManiaa<br></br>
                                    Partner<br></br>
                                    Manage your Classroom on CareerManiaa
                                </p>
                            </div>

                            <div className='cup_3_img'>
                                <img src={img2} alt="" class="img-fluid" />
                            </div>

                            <div className='moving_box_img '>
                                <img src={img4} alt="" class="img-fluid" />
                            </div>

                            <div className='girl_img '>
                                <img src={img5} alt="" class="img-fluid" />
                            </div>



                        </div>
                        <div className='col-md-6 right_form_1'>
                            <a href="/"> <FaLongArrowAltLeft className="arrow_1" style={{ color: "black" }} /></a>


                            <h1 className='text_3'>Enter OTP</h1>
                            <p className='para_3'>Enter password for 6205104602

                            </p>
                            {/* <p className='para_6 mt-4 '><BsDashLg size='90' /> <BsDashLg size='90' /><BsDashLg size='90' /><BsDashLg size='90' /></p>  */}
                            {/* <p className='para_6 mt-4 '><AiOutlineLine size='90' /> <AiOutlineLine size='90' /><AiOutlineLine size='90' /><AiOutlineLine size='90' /></p>  */}


                            <input type="text" placeholder='Enter Your Password' class="input_2 " />
                            <div className='Eye_password'><IoMdEye /></div>

                            <div className='forgetpass'>
                                <span >Forgot <a href="form_8">password?</a></span>
                            </div>


                            {/* <p className='para_7'><u>Resend OTP</u></p> */}
                            <button  class="btn btn-secondary btn-lg btn_4">Login</button>


                           

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

export default Form_7;
