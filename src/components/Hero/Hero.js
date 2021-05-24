import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ProfileImage from '@assets/images/png/ProfileImage.png'

import './Hero.css'

const Hero = () => {
  return (
    <section className="hero d-flex justify-content-center px-5 m-0">
      {/* <Container>
        <Row className="d-flex gx-5 justify-content-center align-items-center">
          <Col xs={12} lg={2} className="d-flex avatar">
            <Image src={ProfileImage} alt="Profile Image" />
          </Col>
          <Col xs={12} lg={8} className="text-center text-lg-left">
            <h4 className="display-4">
              <a href="/">
                Sarah&apos;s day care available now in North Sydney
              </a>{' '}
              Wednesday, Thursday, Friday - 7:30 - 5:30
            </h4>
          </Col>
        </Row>
      </Container> */}
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
