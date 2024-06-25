import React, { useState } from 'react';
import images from '../Components/Images';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const showLabel = (id) => {
    const input = document.getElementById(id);
    const label = input.previousElementSibling;
    if (input.value.trim() !== '') {
      label.style.display = 'block';
    } else {
      label.style.display = 'none';
    }
  };

  const resetForm = () => {
    setForm({ name: '', email: '', message: '' });
    document.querySelectorAll('.labelTag').forEach(label => {
      label.style.display = 'none';
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === '' || form.email === '' || form.message === '') {
      alert('Please fill in all the fields before submitting.');
    } else {
      axios.post('http://localhost:3000/api/contact', form)
        .then(response => {
          console.log(response.data);
          toast("Thanks for contacting me ,your message has being delivered.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'custom-toast custom-toast-success',
            bodyClassName: 'custom-toast-body',
            progressClassName: 'custom-toast-progress',
          });
          resetForm();
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  };

  return (
    <>
      <section id="contact-us">
        <div className="contact-container">
          <div className="contact-left">
            <div className="left-side">
              <div className="address-details">
                <img src={images.address} alt="" className="contact-img" />
                <div className="topic">Address</div>
                <div className="text-one">birla college road,</div>
                <div className="text-two"> kalyan,maharashtra</div>
              </div>
              <div className="phone-details">
                <img src={images.phone} alt="" className="contact-img" />
                <div className="topic">Phone</div>
                <div className="text-one">+9186 5509 1639</div>
              </div>
              <div className="email-details">
                <img src={images.email} alt="" className="contact-img" />
                <div className="topic">Email</div>
                <div className="text-one">gosavipraful2@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="heading">
              <h3>Contact Us</h3>
            </div>

            <hr className="form-hrline" />

            <div className="topic-text">Send me a message</div>
            <p>
              If you have any work for me or any types of queries related to me, you can send me a message from here.
              It's my pleasure to help you.
            </p>

            <form method="post" id="contactForm" onSubmit={handleSubmit}>

              <div className="input-box">
                <label htmlFor="inputField1" id="labelTag" style={{ display: 'none' }} className="labelTag"> ENTER YOUR NAME: </label>
                <input type="text" className="form-control" id="inputField1" onInput={(e) => { showLabel('inputField1'); handleInputChange(e); }} placeholder="ENTER YOUR NAME" name="name" value={form.name} />
                <i></i>
              </div>

              <div className="input-box">
                <label htmlFor="inputField2" id="labelTag" style={{ display: 'none' }} className="labelTag">
                  ENTER YOUR EMAIL:
                </label>
                <input type="email" className="form-control" id="inputField2" onInput={(e) => { showLabel('inputField2'); handleInputChange(e); }} placeholder="ENTER YOUR EMAIL" name="email" value={form.email} />
                <i></i>
              </div>

              <div className="input-box message-box">
                <div>
                  <label htmlFor="inputField3" id="labelTag" style={{ display: 'none' }} className="labelTag">
                    ENTER YOUR MESSAGE:
                  </label>
                  <textarea className="form-control" rows="10" cols="30" placeholder="ENTER YOUR MESSAGE" name="message" id="inputField3" onInput={(e) => { showLabel('inputField3'); handleInputChange(e); }} value={form.message} ></textarea>
                  <i></i>
                </div>
              </div>

              <div className="form-button">
                <input type="submit" value="Send Now" />
              </div>
            </form>

            <ToastContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
