import React, { useState, useRef } from 'react';
import '../styles/ContactUs.css';
import submitIcon from '../icons/Icon_Submit.svg';
import contactPageImg from '../assets/Img_Contact.png'
import axios from 'axios';

const SubmissionCode = Object.freeze({
  Succesful_Submission: Symbol(1),
  Unsuccesful_Submission: Symbol(2),
  Base_Submission: Symbol(0),
})

let errorMessage = "";

function ContactUs() {
  const [phoneNumbers, setPhoneNumbers] = useState(['']); // State to store phone numbers
  const [addressDetailsChecked, setAddressDetailsChecked] = useState(false); // State to track the checkbox status
  const [isSubmitted, setIsSubmitted] = useState(SubmissionCode.Base_Submission);
  const formRef = useRef(null); // Ref to reference the form element

  const addPhoneNumber = () => {
    setPhoneNumbers(['', '']); // Add two empty phone number inputs to the state
  };

  const handlePhoneNumberChange = (index, value) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleAddressDetailsChange = (e) => {
    setAddressDetailsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
  
    const data = {
      FullName: fullName,
      EmailAddress: emailAddress,
      PhoneNumbers: [phoneNumber],
      Message: message,
      bIncludeAddressDetails: addressDetailsChecked,
      AddressDetails: addressDetailsChecked
        ? {
            AddressLine1: document.getElementById('addressLine1').value,
            AddressLine2: document.getElementById('addressLine2').value,
            CityTown: document.getElementById('city').value,
            StateCounty: document.getElementById('stateCountry').value,
            Postcode: document.getElementById('postcode').value,
            Country: document.getElementById('country').value,
          }
        : {},
    };
   

 
    axios
      .post('https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit', data)
      .then((response) => {
        formRef.current.reset(); // Reset the form using the ref
        setPhoneNumbers(['']);
        setAddressDetailsChecked(false);
        setIsSubmitted(SubmissionCode.Succesful_Submission);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitted(SubmissionCode.Unsuccesful_Submission);
        errorMessage = error.response.data.Errors[0].MessageCode
      });
  };
  

  if (isSubmitted === SubmissionCode.Succesful_Submission) {
    return (
      <div className="success-message">
        <div className="success-icon">
          <img src={submitIcon} alt="Success" className="submit-icon" />
        </div>
        <p className="success-text">Your message has been sent</p>
        <p className="success-text">We will be in contact with you within the next 24 hours.</p>
      </div>
    );
  } else if (isSubmitted === SubmissionCode.Unsuccesful_Submission){
    return(
    <p>Your message did not send: {errorMessage}</p>)
  }

  
  return (
    <div>
      <div className="contact-us-container">
        <div className="left-section">
          <h1 className="contact-us-header">Contact Us</h1>
          <br />
          <p className="contact-us-bold">Populo facilisi nam no, dolor deleniti deseruisse ne cum,
           nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.
          </p>
          <br />
          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
  <div className="input-group">
    <div className="label-row">
      <label htmlFor="fullName">Full Name:</label>
      <label htmlFor="email">Email Address:</label>
    </div>
    <div className="input-row">
      <input type="text" id="fullName" className="input-height-normal"/>
      <input type="email" id="email" className="input-height-normal" />
    </div>
  </div>
  <div className="input-group">
    <label htmlFor="phoneNumber">Phone Number 01 (optional):</label>
    <input type="text" id="phoneNumber" className="input-height-normal" />
  </div>

  {phoneNumbers.length === 1 && (
    <div className="input-group">
      <button type="button" onClick={addPhoneNumber} className="phone-btn">
        Add new phone number
      </button>
    </div>
  )}
  {phoneNumbers.length === 2 && (
    <div className="input-group">
      <label htmlFor="phoneNumber2">Phone Number 02 (optional):</label>
      <input
        type="text"
        id="phoneNumber2"
        className="input-height-normal"
        value={phoneNumbers[1]}
        onChange={(e) => handlePhoneNumberChange(1, e.target.value)}
      />
    </div>
  )}
  <div className="input-group">
    <div className="label-row-message">
      <label htmlFor="message">Message:</label>
      <p className="input-description">Maximum text length is 500 characters</p>
    </div>
    <textarea rows="8" id="message" className='input-height-large' />
  </div>
  <div className="checkbox-group">
    <input
      type="checkbox"
      id="addressDetails"
      checked={addressDetailsChecked}
      onChange={handleAddressDetailsChange}
      className="custom-checkbox"
    />
    <label htmlFor="addressDetails">Add address details</label>
  </div>
  {addressDetailsChecked && (
    <>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="addressLine1">Address Line 1:</label>
          <input type="text" id="addressLine1" className="input-height-normal"/>
        </div>
        <div className="input-group">
          <label htmlFor="addressLine2">Address Line 2</label>
          <input type="text" id="addressLine2" className="input-height-normal" />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="city">City/Town:</label>
          <input type="text" id="city" className="input-height-normal" />
        </div>
        <div className="input-group">
          <label htmlFor="stateCountry">State/Country:</label>
          <input type="text" id="stateCountry" className="input-height-normal" />
        </div>
        <div className="input-group">
          <label htmlFor="postcode">Postcode:</label>
          <input type="text" id="postcode" className="input-height-normal" />
        </div>
        <div className="input-group">
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" className="input-height-normal" />
        </div>
      </div>
    </>
  )}
  <div className="submit-button">
    <button type="submit">
      <img src={submitIcon} alt="Submit" className="submit-icon" />
      Submit
    </button>
  </div>
</form>

        </div>
        <div className="right-section" >
          <img className="contact-image" src={contactPageImg} alt="Contact Us" />
        </div>
    </div>
</div>
);
}

export default ContactUs;


 







