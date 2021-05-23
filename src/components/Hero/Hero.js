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
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={1} className="d-flex justify-content-center">
            <Image src={ProfileImage} alt="Profile Image" className="mr-3" />
          </Col>
          <Col className="m-lg-auto text-center text-lg-left">
            <h4 className="display-4">
              <a href="/">
                Sarah&apos;s day care available now in North Sydney
              </a>{' '}
              Wednesday, Thursday, Friday - 7:30 - 5:30
            </h4>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
