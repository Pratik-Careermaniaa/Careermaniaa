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
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
// import { colors } from '@material-ui/core';
// import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';


const Form_1 = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedRadio, setSelectedRadio] = useState(null);
    const [isInputValid, setIsInputValid] = useState(false);

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
        setInputValue('');
    };



    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedRadio === "classid") {
            if (inputValue.length == 5) {
                toast.success("Class ID is valid");

                // <button  style={{ backgroundColor: "red" }} />
                // console.log("Class ID is valid");
            } else {
                toast.error("Class ID is Invalid");
                // console.log("Class ID is invalid");
            }
        } else if (selectedRadio === "mobile") {
            if (inputValue.length == 10) {
                // console.log("Mobile number is valid");
                toast.success("Mobile number is valid");
            }
            else {
                // console.log("Mobile number is invalid");
                toast.error("Mobile number is Invalid");
            }

        }
    };

    const inputStyle = {
        border: `2px solid ${selectedRadio === 'classid' ? 'red' : selectedRadio === 'mobile' ? 'red' : '#cococo'}`
    };

    const buttonStyle = {
        backgroundColor: selectedRadio === 'classid' ? 'red' : selectedRadio === 'mobile' ? 'red' : 'grey',
        color: 'white'
    };

    // const handleClick = () => {
    //     history.push('/next-page');
    //   };

    return (
        <>
            <div className='container'>
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
                            <h1 className='text_2 '>Get Started</h1>
                            <p className='para_1 px-5'>The next step is to, Enter a registered  mobile number or Class ID <AiFillInfoCircle /></p>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className='radio_2 px-5'>
                                        <input type="radio" value="classid" checked={selectedRadio === "classid"} onChange={handleRadioChange} className='radio_4' />
                                        Class ID
                                    </label>
                                    <label className='radio_3 px-5'>
                                        <input type="radio" value="mobile" checked={selectedRadio === "mobile"} onChange={handleRadioChange} />
                                        Mobile
                                    </label>
                                </div>

                                <div >{selectedRadio === "classid" ? <span className='radio_1'>Enter Your Class ID Number</span> : <span className='radio_5'>Enter Your Mobile Number </span>}</div>

                                <input type="text" value={inputValue} onChange={handleInputChange} disabled={!selectedRadio} style={inputStyle} class="input_1 " />

                                <Link to="/Form_2"> <button style={buttonStyle}
                                    type="submit" disabled={!selectedRadio}  class="btn btn-secondary btn-lg btn_1">Continue</button></Link>
                               
                                <p className='para_4 mt-5 '>Getting your courses listed on CareerManiaa ?? </p>
                                <p className='para_1 px-5 '><u>Join our partner network</u></p>
                            </form>


                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>



        </>
    )
}

export default Form_1
