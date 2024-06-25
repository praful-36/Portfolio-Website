import React from 'react'
import images from '../Components/Images';

const Details = () => {

  return (
    <section id="details">
      <div className="grid-container">

        <img src={images.work} alt="" />

        <div className="text-details">
          <div className="text-d">
            <h2>Why Work With Me</h2>
            <p>I am a great communicator and love to invest the necessary time to understand the customer's
              problem very well</p>
            <h5>DESIGN TOOLS</h5>
            <p>My favorite design tools are canva editor. I can create best looking design in canva.I am
              looking forward to working with other designing tools</p>
            <h5>DEVELOPMENT SKILLS</h5>
            <p>I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other
              modern
              frameworks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
