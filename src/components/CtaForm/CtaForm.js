import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import './CtaForm.css'

const CtaForm = () => {
  const [name, useName] = useState('')
  const [email, useEmail] = useState('')

  const GetName = (event) => {
    useName(event.target.input)
  }

  const GetEmail = (event) => {
    useEmail(event.target.input)
  }

  const sendData = () => {
    fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
      method: 'POST',
      body: {
        name: name,
        email: email,
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data)
      })
  }

  return (
    <Form className="w-100 w-lg-50 mx-auto w-50">
      <Form.Row>
        <Col className="col-12 col-lg-4 input">
          <Form.Label srOnly>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Col>
        <Col className="col-12 col-lg-5 input">
          <Form.Label srOnly>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" />
        </Col>
        <Col className="col-12 col-lg-3">
          <Button className="w-100">Send</Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default CtaForm
