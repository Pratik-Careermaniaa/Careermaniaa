import React, { useState } from 'react'

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
import img9 from './images/lock.jpg';
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Form from 'react-bootstrap/Form';


const Form_2 = () => {

    const [classId, setClassId] = useState("");
    const [classErr, setClassErr] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const navigate = useNavigate();

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


    const handleClickNext1 = () => {
        navigate("/form_3");
    }

    function classHandler(e) {
        let item = e.target.value;
        if (item.length > 6) {
            setClassErr(true)
        }

        else {
            setClassErr(false)
        }
        setClassId(item)
    }

    

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
                        <div className='col-md-6 right_form_1  '>
                            <div className='pass_update '>
                                <form>
                                    <a href="form_4"><FaLongArrowAltLeft className="arrow_2" style={{ color: "black" }} /></a>
                                    {/* <img src={img9} alt="" class="img-fluid lock_1" /> */}
                                    <div className='lead'>
                                        <h2>Forgot Password</h2>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword" class="form-label">Create New Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" />

                                        {/* <div id="emailHelp" class="form-text">password must be use @ </div> */}
                                    </div>
                                    <div>
                                        <button className="btn eyepassword2" onClick={togglePassword}>
                                            {passwordType === "password" ? <IoMdEye /> : <IoMdEyeOff />}
                                        </button>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Confirm New Password</label>
                                        <input type="password"  onChange={handlePasswordChange} value={passwordInput} class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div>
                                        <button className="btn eyepassword3" onClick={togglePassword}>
                                            {passwordType === "password" ? <IoMdEye /> : <IoMdEyeOff />}
                                        </button>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit"  class="btn btn-secondary btn-lg btn_4" >Forgot  Password</button>
                                    <p className='para_4 mt-5 '>Getting your courses listed on CareerManiaa ?? </p>
                                    <p className='para_1 px-5 '><u>Join our partner network</u></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Form_2;
