import React from 'react'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Calendar from '@assets/images/svg/calendar-icon.svg'
import LogoComplete from '@assets/images/svg/logo-complete.svg'
import Facebook from '@assets/images/svg/Facebook.svg'
import Twitter from '@assets/images/svg/Twitter.svg'
import Instagram from '@assets/images/svg/Instagram.svg'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="footer-main">
        <h2 className="display-2">Become a nanny share host</h2>
        <p>Takes less than 5 minutes to get started</p>
        <Button variant="secondary" className="d-flex text-left m-auto">
          <Image src={Calendar} alt="" className="mr-3 align-self-center" />
          <div>
            Create Your Nanny Share <br />{' '}
            <small>Takes less than 5 minutes</small>
          </div>
        </Button>
        <a className="d-block mt-4" href="/">
          Or browse local nanny-shares
        </a>
        <Container className="my-5">
          <Row>
            <Col className="col-12 col-lg-3 justify-self-start align-self-center">
              <Image src={LogoComplete} alt="Hapu logo" />
            </Col>
            <Col className="d-flex flex-wrap justify-content-center align-items-center">
              <h5 className="display-5 mx-2 mb-lg-0">
                <a href="/" className="footer-link">
                  Share Your Nanny
                </a>
              </h5>
              <h5 className="display-5 mx-2 mb-lg-0">
                <a href="/" className="footer-link">
                  Our Story
                </a>
              </h5>
              <h5 className="display-5 mx-2 mb-lg-0">
                <a href="/" className="footer-link">
                  Blog
                </a>
              </h5>
              <h5 className="display-5 mx-2 mb-lg-0">
                <a href="/" className="footer-link">
                  Terms &amp; Privacy
                </a>
              </h5>
            </Col>
            <Col className="col-12 col-lg-3 d-flex justify-content-center">
              <a href="/">
                <Image src={Facebook} alt="facebook button" />
              </a>
              <a href="/">
                <Image src={Twitter} alt="twitter button" className="mx-3" />
              </a>
              <a href="/">
                <Image src={Instagram} alt="instagram button" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="d-block d-md-none divider" />
      <p className="m-3 copyright">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </footer>
  )
}

export default Footer
