import React from 'react'

const Whatsapp = () => {
  return (
    <div className="floating_btn">
    <a target="_blank" href="https://wa.me/+919364000460">
      <div className="contact_icon">
        <img className='whatsapp-png' src={'/whatsapp-icon.png'} alt="whatsapp icon" />
      </div>
    </a>
    <p className="text_icon">Talk to us?</p>
  </div>
  )
}

export default Whatsapp