import React from 'react'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './Footer.css'
import Calendar from '../../assets/images/svg/calendar-icon.svg'
import LogoComplete from '../../assets/images/svg/logo-complete.svg'
import Facebook from '../../assets/images/svg/Facebook.svg'
import Twitter from '../../assets/images/svg/Twitter.svg'
import Instagram from '../../assets/images/svg/Instagram.svg'

const Footer = () => {
  return (
    <footer className="footer text-center">
      <h2 className="display-2">Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <Button className="footer-button d-flex text-left m-auto">
        <Image src={Calendar} className="mr-3 align-self-center" />
        <div>
          Create Your Nanny Share <br />{' '}
          <small>Takes less than 5 minutes</small>
        </div>
      </Button>
      <a classList="link" href="#">
        Or browse local nanny-shares
      </a>
      <Container className="my-5">
        <Row>
          <Col className="col-12 col-lg-3 justify-self-start align-self-center">
            <Image src={LogoComplete} />
          </Col>
          <Col className="d-flex justify-content-between align-items-center col-12 col-lg-6">
            <h5 className="display-5">
              <a href="#" className="footer-link">
                Share Your Nanny
              </a>
            </h5>
            <h5 className="display-5">
              <a href="#" className="footer-link">
                Our Story
              </a>
            </h5>
            <h5 className="display-5">
              <a href="#" className="footer-link">
                Blog
              </a>
            </h5>
            <h5 className="display-5">
              <a href="#" className="footer-link">
                Terms &amp; Privacy
              </a>
            </h5>
          </Col>
          <Col className="col-12 col-lg-3 d-flex justify-content-center">
            <Image src={Facebook} />
            <Image src={Twitter} className="mx-3" />
            <Image src={Instagram} />
          </Col>
        </Row>
      </Container>
      <hr className="d-block d-md-none divider" />
      <p className="m-3 copyright">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </footer>
  )
}

export default Footer
