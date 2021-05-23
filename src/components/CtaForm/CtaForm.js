import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import './CtaForm.css'

const CtaForm = () => {
  const [name, useName] = useState('')
  const [email, useEmail] = useState('')

  const setName = (event) => {
    useName(event.target.value)
  }

  const setEmail = (event) => {
    useEmail(event.target.value)
  }

  const sendData = (name, email) => {
    if (!name) return null
    if (!email) return null

    const data = { name, email }

    fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data)
      })
  }

  return (
    <Form className="mx-auto">
      <Form.Row>
        <Col className="col-12 col-lg-5 mb-lg-0 input">
          <Form.Label srOnly>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            className="h-100"
            value={name}
            onChange={setName}
            required
          />
        </Col>
        <Col className="col-12 col-lg-5 mb-lg-0 input">
          <Form.Label srOnly>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your Email"
            className="h-100"
            value={email}
            onChange={setEmail}
            required
          />
        </Col>
        <Col className="col-12 col-lg-2">
          <Button className="w-100" onClick={() => sendData(name, email)}>
            Send
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default CtaForm
