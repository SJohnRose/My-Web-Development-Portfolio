import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      }
      else {
        setErrorMessage('');
        return;
      }
    } 
    else if (inputType === 'userName') {
      setUserName(inputValue);
    } 
    else {
      setMessage(inputValue);
    }
    
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
    }
    if (!message) {
      setErrorMessage('Message is empty');
      return;
    }
    setUserName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div class = "page">
      <h2 className="contact-title">Contact Me </h2>
      <form className="form">
        Name:
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
        />
        Email:
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
        />
        Message:
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          rows = {10}
          cols = {60}
        />
        
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}