import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleButtonClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      <section id="FAQ">
        <div className="FAQ-container">
          <div className="FAQ">
            <h2>frequently asked questions (FAQ) </h2>

            <div className="faq">
              <div className="faq-question">
                <button
                  className="toggle-button"
                  onClick={() => handleButtonClick(0)}
                >
                  {openIndex === 0 ? '-' : '+'}
                </button>
                <span>How can I contact you and quickly get a quote for my online project?</span>
              </div>
              <div
                className="faq-answer"
                style={{ display: openIndex === 0 ? 'block' : 'none' }}
              >
                <p className="paragraph">
                  The best way to reach me is through the contact form or by messaging me on my social media
                  accounts. For a fast quote make sure you provide many project details.
                </p>
              </div>
            </div>

            <div className="faq">
              <div className="faq-question">
                <button
                  className="toggle-button"
                  onClick={() => handleButtonClick(1)}
                >
                  {openIndex === 1 ? '-' : '+'}
                </button>
                <span>Will my website be mobile-friendly?</span>
              </div>
              <div
                className="faq-answer"
                style={{ display: openIndex === 1 ? 'block' : 'none' }}
              >
                <p className="paragraph">
                  Let it be a ticket booking, online order, browsing, etc. people are
                  keen to do these tasks on the go. So, developing a responsive website will help in increasing the look and feel
                  of your website on both small and large devices. It also increases the number of visitors,
                  rankings in search engines. <br /><br />
                  Yes, we ensure to develop a responsive website that would make your visitors appealing
                  and deliver an optimized browsing experience.
                </p>
              </div>
            </div>

            <div className="faq">
              <div className="faq-question">
                <button
                  className="toggle-button"
                  onClick={() => handleButtonClick(2)}
                >
                  {openIndex === 2 ? '-' : '+'}
                </button>
                <span>Who will I work with during the project?</span>
              </div>
              <div
                className="faq-answer"
                style={{ display: openIndex === 2 ? 'block' : 'none' }}
              >
                <p className="paragraph">
                  Many web development companies use freelance developers or interns for
                  their projects. Even some of the best website design companies don’t give access for clients to meet with
                  their designers or developers. <br /> So, you have asked a very vital question and you
                  should ask this to any firm you approach for this purpose. With us, you will directly work with our core
                  developers but may change according to the stages of development.
                </p>
              </div>
            </div>

            <div className="faq">
              <div className="faq-question">
                <button
                  className="toggle-button"
                  onClick={() => handleButtonClick(3)}
                >
                  {openIndex === 3 ? '-' : '+'}
                </button>
                <span>How long does it take to build a website?</span>
              </div>
              <div
                className="faq-answer"
                style={{ display: openIndex === 3 ? 'block' : 'none' }}
              >
                <p className="paragraph">
                  A typical website will take 14 weeks at a minimum from start to
                  launch. This includes 3 weeks discovery, 6 weeks design, 3 weeks initial development, and 2 weeks of
                  modifications. It could take much longer if you wait until the end to start writing content.
                </p>
              </div>
            </div>

            <div className="faq">
              <div className="faq-question">
                <button
                  className="toggle-button"
                  onClick={() => handleButtonClick(4)}
                >
                  {openIndex === 4 ? '-' : '+'}
                </button>
                <span>Do I fully own the website you are building?</span>
              </div>
              <div
                className="faq-answer"
                style={{ display: openIndex === 4 ? 'block' : 'none' }}
              >
                <p className="paragraph">
                  YES! Everything that we build will be 100% owned by you. Most of our
                  clients stay with us for the life of the website. Our team is just irresistible that way. But if for any
                  reason you decide you want to take your site to another hosting service and get another company to
                  service the site, we will happily assist you in making the transition as effortlessly
                  and efficiently as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
