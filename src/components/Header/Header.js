import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import Navigation from '@components/Navigation/Navigation'

import HeaderImage from '@assets/images/png/ImageHeader.png'
import PlayButton from '@assets/images/svg/play-button.svg'

import './Header.css'

const Header = () => {
  return (
    <Jumbotron as="header" className="header rounded-0 mb-0 pt-0 px-0">
      <Navigation className="mx-3" />
      <Container className="mt-5">
        <Row className="d-flex justify-content-center align-items-stretch">
          <Col lg={6} className="text-center text-lg-left">
            <h1 className="display-1">
              Easily create or join a local nanny share with Hapu
            </h1>
            <p>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </p>
            <a className="header-link align-self-end" href="/">
              <Image
                src={PlayButton}
                alt="play button"
                width="48"
                height="48"
                className="mr-3"
              />
              See hapu in action (27 seconds)
            </a>
          </Col>
          <Col lg={6} className="d-none d-lg-flex justify-content-end">
            <Image
              src={HeaderImage}
              alt="Nanny Share notification demo"
              width="316px"
              height="290px"
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Header
