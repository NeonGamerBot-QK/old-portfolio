import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiWindowsterminal,
  SiVercel,
  SiUbuntu,
  SiKalilinux
} from 'react-icons/si'

function Toolstack () {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiLinux className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiWindowsterminal className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiUbuntu className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVercel className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiKalilinux className='inline-block' />
      </Col>
    </Row>
  )
}

export default Toolstack
