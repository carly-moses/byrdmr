import React from 'react';
import Header from '../Header/Header';
import styles from './ContactForm.module.css';

class ContactForm extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  messageRef = React.createRef();

  submit = event => {
    event.preventDefault();
    const contactForm = {
      name:  this.nameRef.current.value,
      email: this.emailRef.current.value,
      message: this.messageRef.current.value,
    };
    alert(`
      ${contactForm.name ? contactForm.name + ', thank' : 'Thank' } you for your submission. 
      We will be in contact soon!
    `);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className={styles.contactForm}>
        <Header />
        <form className={styles.formContainer} onSubmit={this.submit}> 
          <label>FULL NAME</label>
          <input name='name' type='text' ref={this.nameRef} placeholder='Enter your full name'/>
          <label>EMAIL</label>
          <input name='email' type='text' ref={this.emailRef} placeholder='Enter your email'/>
          <label>MESSAGE</label>
          <textarea name='message' ref={this.messageRef} placeholder='What are your plans?'/>
          <button type='submit' className={styles.submitButton}> 
            <span>Send Message</span>
            <span>→</span>
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
