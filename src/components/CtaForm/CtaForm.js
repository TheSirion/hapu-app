import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import './CtaForm.css'

const CtaForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const sendData = async () => {
    event.preventDefault()

    if (!name || !email) {
      window.alert('Please inform a valid name and email.')
      return
    }

    const data = { name, email }

    try {
      const result = await fetch(
        'https://api.jungledevs.com/api/v1/challenge-newsletter/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      console.log(await result.json())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form className="mx-auto" type="submit">
      <Form.Row>
        <Col className="col-12 col-lg-5 mb-lg-0 input">
          <Form.Label srOnly>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            className="h-100"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Col>
        <Col className="col-12 col-lg-2">
          <Button type="submit" className="w-100" onClick={() => sendData()}>
            Send
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default CtaForm
