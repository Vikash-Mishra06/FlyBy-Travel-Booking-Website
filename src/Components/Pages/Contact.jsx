import React from 'react'

function Contact() {
  return (
    <>
        <div className="contact-section main-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
                <div className="contact-card">
                  <h4 className="contact-heading">Feel Free to Write Us Anytime</h4>
                  <form method='post' className="contact-form">
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <input type="text" className="form-control custom-input" placeholder='Enter Your Name' />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" className="form-control custom-input" placeholder='Enter Your Email' />
                    </div>
                    <div className="col-sm-6">
                      <input type="number" className="form-control custom-input" placeholder='Enter Your Phone Number' />
                    </div>
                    <div className="col-sm-12">
                      <textarea className='form-control custom-textarea' rows={5} placeholder='Enter Your Message...'></textarea>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button type='submit' className='btn send-btn'>Send Message</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          
        </div>
    </>
  )
}

export default Contact