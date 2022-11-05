import React from 'react';
import  { useState } from "react";
import '../App.scss'

  function Contact () {
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState()
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
   
    const handleChangeText = (event) => {
      setTextarea(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      alert("submitted");
      console.log(handleSubmit, "here");
    }

    return(
      <div>
        <div className='container'> 
              <div className='contact'>
                  <div className='contact__header'>        
                    <h1 className='heading__1'> CONTACT ME </h1>
                    <p className='ptag'>Hi there, Contact me to ask me anything you have in mind</p>
                  </div>
                  <div className='form'>
                      <form className='form__container' >
                        <div className='form__group form__name'>
                            
                            <div className='form__firstname'>
                            <label className='form__label' htmlFor="firstname">First name</label>
                            <input type='text' 
                            name='firstname'
                            value={inputs.firstname}
                            onChange={handleChange}
                             className='form__input' 
                             placeholder='Enter your first name' 
                             id='firstname' required/>     
                            </div>

                            <div className='form__lastname'>
                            <label className='form__label' htmlFor="Lastname">Last name</label>
                            <input type='text' className='form__input' placeholder='enter your last name' id='lastname ' required 
                            name='lastname'
                            value={inputs.lastname}
                            onChange={handleChange}
                            />
                            </div>
                        </div>

                        <div className='form__group'>
                       
                        <label className='form__label' htmlFor="email">Email</label>
                        <input type='email' className='form__input form__email' placeholder='Your name at gmail.com' id='email' required
                        name='email'
                        value={inputs.email}
                        onChange={handleChange}
                        />
                        </div>

                        <div className='form__group'>
                        <label className='form__label' htmlFor="message">Message</label>
                        <textarea className='form__textarea' placeholder='Send a message and I will reply ypu as soon as possible' required
                        value={textarea} onChange={handleChangeText}
                        /> 
                        </div>

                        <div className='form__checkbox'>
                        <input type='checkbox' className='input__checkbox' required/>
                        <p> You agree to providing your data to name who may contact you</p>
                        </div>

                        <button type='submit' className='btn' id='btn__submit' onSubmit={handleSubmit}>Send Message</button>
                      </form>
                  </div>

                </div>
        </div>

           <div className='footer'>
                  <ul className='footer__list'>
                    <li className='footer__item'> <a href='http://localhost:3000/' className='footer__link'><img src='img/I4G.png' className='footer__img' alt=''/></a></li> 
                    <li  className='footer__item'><a href='http://localhost:3000/' className='footer__link footer__img'>HNG internship 9 Frontend Task</a></li>
                    <li   className='footer__item'><a href='http://localhost:3000/' className='footer__link'> <img src='img/zuri-logo.png 'alt='' className='footer__img'/></a></li>
                  </ul>
              </div>
        </div>
    )
}

export default Contact;