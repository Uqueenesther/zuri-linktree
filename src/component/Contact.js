import React from 'react';
import '../App.scss'

function  Contact (){
    return(
      <div>
        <div className='container'> 
          <div className='contact'>
          <div className='contact__header'>        
            <h1 className='heading__1'> CONTACT ME </h1>
            <p className='ptag'>Hi there, Contact me to ask me anything you have in mind</p>
          </div>
          <div className='form'>
               <form className='form__container'>
                <div className='form__group form__name'>
                    <div className='form__firstname'>
                    <label className='form__label'>first name</label>
                    <input type='text' className='form__input' placeholder='Enter your first name' id='firs_name' required/>     
                    </div>
                    <div className='form__lastname'>
                    <label className='form__label'>Last name</label>
                    <input type='text' className='form__input' placeholder='enter your last name' id='last_name' required/>
                    </div>
                </div>

                <div className='form__group'>
                <label className='form__label'>Email</label>
                <input type='email' className='form__input form__email' placeholder='Your name at gmail.com' id='email' required/>
                </div>

                <div className='form__group'>
                <label className='form__label'>Message</label>
                 <textarea className='form__textarea' placeholder='Send a message and I will reply ypu as soon as possible' id='message' required/> 
                </div>

                <div className='form__checkbox'>
                <input type='checkbox' className='input__checkbox' />
                <p> You agree to providing your data to WHALLA YO who may contact you</p>
                </div>

                 <button type='submit' className='btn' id='btn__submit'>Send me</button>
               </form>
             </div>

        

          </div>
              {/* <div className='footer'>
              <ul className='footer__list'>
                <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'><img src='img/I4G.png' className='footer__img' alt=''/></a></li>
                <li> <a href='http://localhost:3000/' className='footer__link footer__img'>HNG internship 9 Frontend Task</a></li>
                <li> <a href='http://localhost:3000/' className='footer__link'> <img src='img/zuri-logo.png 'alt='' className='footer__img'/></a></li>
              </ul>
             </div> */}
        </div>
        <div className='footer contact'>
        <ul className='footer__list'>
          <li className='footer__item'><a href='http://localhost:3000/' className='footer__link'><img src='img/I4G.png' className='footer__img' alt=''/></a></li>
          <li className='text'> <a href='http://localhost:3000/' className='footer__link '>HNG internship 9 Frontend Task</a></li>
          <li> <a href='http://localhost:3000/' className='footer__link'> <img src='img/zuri-logo.png 'alt='' className='footer__img'/></a></li>
        </ul>
       </div>
        </div>
    )
}

export default Contact;