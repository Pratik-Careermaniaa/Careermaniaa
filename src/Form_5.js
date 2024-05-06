import React, { useState, useEffect } from 'react';

function Form_5() {
    const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isValidOtp, setIsValidOtp] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [timer, setTimer] = useState(10);

  

  function handleMobileNumberChange(event) {
    setMobileNumber(event.target.value);
  }




  

 

  return (
    <div>
      
      <br />
      {timer > 0 ? (
        <span>Resend OTP in {timer} seconds</span>
      ) : (
        <button  >
          Resend
        </button>
      )}
      <br />
      <label>
        OTP:
        <input type="text" value={otp} />
      </label>
      <br />
      
      <br />
      <button  disabled={isButtonDisabled || !isValidOtp}>
        Continue
      </button>
    </div>
  );
}
export default Form_5;