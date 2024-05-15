import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit
} from 'react-icons/di'
import { SiNextdotjs, SiYarn, SiSqlite } from 'react-icons/si'

function Techstack () {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiYarn className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiSqlite className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMysql className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs className='inline-block' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit className='inline-block' />
      </Col>
    </Row>
  )
}

export default Techstack
