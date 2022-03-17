import React from 'react'
import './footer.css'
import Facebook from '../../assest/icon-facebook.svg'
import Instagram from '../../assest/icon-instagram.svg'
import Twitter from '../../assest/icon-twitter.svg'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="image-container">
            <h4>Shortly</h4>
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
        </div>
        <div className="text-container">
            <div className="feature">
                <h4>Feature</h4>
                <p><a href="">Link shortening</a></p>
                <p><a href="">Branded Links</a></p>
                <p><a href="">Analytic</a></p>
            </div>
            <div className="resource">
                <h4>Resource</h4>
                <p><a href="">Blog</a></p>
                <p><a href="">Develper</a></p>
                <p><a href="">Support</a></p>
            </div>
            <div className="company">
                <h4>Company</h4>
                <p><a href="">About</a></p>
                <p><a href="">Our team</a></p>
                <p><a href="">Career</a></p>
                <p><a href="">Contact</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer