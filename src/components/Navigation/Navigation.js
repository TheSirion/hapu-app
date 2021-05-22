import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import Badge from '../../assets/images/svg/Badge.svg'

import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar className="navbar py-0 justify-content-between">
      <Navbar.Brand href="#home" className="pt-0">
        <Image src={Badge} alt="Logo Badge" />
      </Navbar.Brand>
      <Nav className="mr-auto d-none d-lg-inline-flex">
        <Nav.Link href="/" className="nav-item mx-lg-3">
          Create Your Nanny Share
        </Nav.Link>
        <Nav.Link href="/" className="nav-item mx-lg-3">
          Browse Shares
        </Nav.Link>
        <Nav.Link href="/" className="nav-item mx-lg-3">
          Our Story
        </Nav.Link>
      </Nav>
      <Nav>
        <Button variant="primary" className="nav-item mx-sm-3">
          Become a Nanny Share Host
        </Button>
        <Nav.Link href="/" className="nav-item mx-lg-3 d-none d-sm-inline-flex">
          Sign In
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation
