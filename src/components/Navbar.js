import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../Assets/logo.png'
// import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
// import { CgGitFork } from "react-icons/cg";
import { ImBlog } from 'react-icons/im'
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillContacts
} from 'react-icons/ai'

import { CgFileDocument } from 'react-icons/cg'

// window.atOptions = {
//   'key' : '71dc240529bf37dbe2cda5bd015d6e4d',
//   'format' : 'iframe',
//   'height' : 60,
//   'width' : 768,
//   'params' : {}
// };
/**
 * It renders a navbar with a logo, a few links and a button.
 * @returns A Navbar component.
 */
function NavBar ({ ackee }) {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  function scrollHandler () {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)
  const navigate = (name) => () => {
  // ackee.action('39c606db-3196-4f13-ad0e-0fe940675820', {
  //   key: name,
  //   value: 1
  // })
  }
  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      id='navbar'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href='/' className='d-flex'>
          <img src={logo} className='img-fluid logo' alt='brand' />
        </Navbar.Brand>
        <div id='navbar-ad' />
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded')
          }}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto' defaultActiveKey='#home'>
            <Nav.Item onClick={navigate('Home')} >
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} className='inline-block' /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item onClick={navigate('About')}>
              <Nav.Link
                as={Link}
                to='/about'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser className='inline-block' style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item onClick={navigate('Project')}>
              <Nav.Link
                as={Link}
                to='/project'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className='inline-block'
                  style={{ marginBottom: '2px' }}
                />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item onClick={navigate('Resume')}>
              <Nav.Link
                as={Link}
                to='/resume'
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument className='inline-block' style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={navigate('Contact')}>
              <Nav.Link
                as={Link}
                to='/contact'
                onClick={() => updateExpanded(false)}
              >
                <AiFillContacts className='inline-block' style={{ marginBottom: '2px' }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item onClick={navigate('Blog')}>
              <Nav.Link
                href='https://blog.saahild.com/'
                target='_blank'
                rel='noreferrer'
              >
                <ImBlog className='inline-block' style={{ marginBottom: '2px' }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
          {/* <script defer>window.spawnAd()</script> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
