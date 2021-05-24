import React from 'react'
import Image from 'react-bootstrap/Image'

import ProfileImage from '@assets/images/png/ProfileImage.png'

import './Hero.css'

const Hero = () => {
  return (
    <section className="hero d-flex justify-content-center px-5 m-0">
      <div className="text-center flex">
      <Image src={ProfileImage} alt="Profile Image" className="avatar" />
      <h4 className="display-4">
        <a href="/">Sarah&apos;s day care available now in North Sydney</a>{' '}
          Wednesday, Thursday, Friday - 7:30 - 5:30
      </h4>
      </div>
    </section>
  )
}

export default Hero
