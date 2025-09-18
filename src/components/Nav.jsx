import React, { useState } from 'react'
import Resume from '../assets/images/Maurice.pdf'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="col-7 text-end" data-aos="fade-left">
        <div className="topnav-lg text-end p-3 pe-0 fw-bolder">
          <a href="#" className="text-decoration-none">
            Home
          </a>
          <a href="#about" className="text-decoration-none">
            About
          </a>
          <a href="#services" className="text-decoration-none">
            Services
          </a>
          <a href="#projects" className="text-decoration-none">
            Projects
          </a>
          <a href={Resume} download className="text-decoration-none resume-btn">
            Resume
          </a>
        </div>
        <div id="navtoggle" onClick={() => setShowMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="34"
            height="34">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
        </div>
      </div>

      <div id="navigation" className={showMenu ? 'show' : ''}>
        <div className="position-relative">
          <div className="text-success fw-bolder text-start">
            NAVIGATION
            <div
              className="btn btn-close btn-lg text-white float-end"
              onClick={() => setShowMenu(false)}>
              X
            </div>
          </div>
          <div className="topnav text-start p-3 ps-0 fw-bolder">
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => setShowMenu(false)}>
              Home
            </a>
            <a
              href="#about"
              className="text-decoration-none"
              onClick={() => setShowMenu(false)}>
              About
            </a>
            <a
              href="#services"
              className="text-decoration-none"
              onClick={() => setShowMenu(false)}>
              Services
            </a>
            <a
              href="#projects"
              className="text-decoration-none"
              onClick={() => setShowMenu(false)}>
              Projects
            </a>
            <a
              href={Resume}
              download
              className="text-decoration-none resume-btn text-center mt-3">
              Download Resume
            </a>
          </div>
          <div className="social pb-2 fix-bottom">
            <a href="https://twitter.com/Cart_el990?s=09" target="_blank">
              <FaXTwitter className="twitter" />
            </a>
            <a href="https://github.com/muritz11" target="_blank">
              <FaGithub className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/maurice-chisom-804325207"
              target="_blank">
              <FaLinkedin className="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
