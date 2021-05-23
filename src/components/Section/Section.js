import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'

import './Section.css'

const Section = ({ divider, children }) => {
  const addDivider = () => {
    if (divider) return <hr className="divider" />
  }
  return (
    <>
      <Container className="section" as="section">
        {children}
      </Container>
      {addDivider()}
    </>
  )
}

Section.propTypes = {
  divider: PropTypes.bool,
  children: PropTypes.element,
}

export default Section
