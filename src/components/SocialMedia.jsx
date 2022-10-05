import React from 'react'
import {FaFacebookF,FaWhatsapp} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"


const SocialMedia = () => {
  return (
    <div className='social-media'>
        <a href=""><FaFacebookF size="25px" /></a>
        <a href=""><FaInstagram size="25px" /></a>
        <a href=""><FaTwitter size="25px" /></a>
        <a href=""><FaWhatsapp size="25px" /></a>
    </div>
  )
}

export default SocialMedia
