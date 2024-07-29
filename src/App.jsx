import React, { useEffect, useState } from 'react'
import './assets/styles/App.css'
import './assets/styles/bootstrap-main/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import { Projects } from './data'
import Astra from './assets/images/astronaut-animate.svg'
import Resume from './assets/images/abuguja maurice.pdf'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { opt } from './particleObj'
import { FaXTwitter, FaChevronUp } from 'react-icons/fa6'
import {
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import AOS from 'aos'

import Nav from './components/Nav'

function App() {
  const [particlesInit, setParticlesInit] = useState(false)
  const date = new Date()
  const currentYear = date.getFullYear()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setParticlesInit(true)
    })
  }, [])

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <>
      <header className="position-relative overflow-hidden" id="header">
        <section className="w-75-85 m-auto header-inner">
          <nav className="row pt-4">
            <div className="col-5">
              <h1 data-aos="fade-right">
                Muritz<span className="text-success">.</span>
              </h1>
            </div>

            <Nav />
          </nav>

          <div className="content text-center min-vh-100 d-flex flex-column align-content-center justify-content-center">
            <h3
              className="text-white-50"
              data-aos="fade-up"
              data-aos-delay="200">
              HELLO! I'M
            </h3>
            <h1 data-aos="fade-up">ABUGUJA MAURICE</h1>
          </div>
        </section>

        {/* stars */}
        <section id="bg-holder" className="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
        {particlesInit && (
          <Particles
            id="tsparticles"
            // particlesLoaded={particlesLoaded}
            options={opt}
          />
        )}
      </header>

      <section id="about">
        <div className="w-75-85 m-auto row">
          <div
            className="col-md-4 d-flex justify-content-center justify-content-md-end"
            data-aos="fade-right"
            data-aos-duration="2000">
            <img src={Astra} alt="" className="h-75" />
          </div>
          <div className="col-md-8 p-0">
            <h2 className="font-weight-lighter" data-aos="fade-down">
              Hello! I'm Abuguja Maurice
            </h2>
            <p className="pt-4 pb-2 text-white-50" data-aos="fade-up">
              A Frontend developer well versed in HTML, CSS, Javascript,
              Boostrap and React, I also dabble with PHP, MYSQL and Laravel. I
              craft awesome websites, landing pages and web apps, helping
              clients develop user-centric digital products and experiences.{' '}
              <br />
              <br />
              My interest in web development started in 2019 when I decided to
              try out new digital skills — turns out i enjoy creating things
              that live on the internet! <br />
              Fast-forward to today, and I’ve had the privilege of interning at
              Genesys Tech Hub, working with a Web Academy to tutor and bring up
              young tech talents and building multiple project that has taught
              me a lot about web technologies. <br />
              <br />
              You can reach through any of the following social media channels.
            </p>
            <div>
              <h4 className="pb-2">
                <a
                  href={Resume}
                  download
                  className="text-decoration-none text-success">
                  Checkout my resume
                </a>
              </h4>
              <div className="social pb-2">
                <a href="https://twitter.com/Cart_el990?s=09" target="_blank">
                  <FaXTwitter className="twitter" />
                </a>
                <a href="https://github.com/muritz11" target="_blank">
                  <FaGithub className="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/maurice-chisom"
                  target="_blank">
                  <FaLinkedin className="linkedin" />
                </a>
              </div>
              <h5>You can also reach me through:</h5>
              <h6 className="text-white-50">
                Email:{' '}
                <a
                  href="mailto:mauricechisom275@gmail.com"
                  className="text-decoration-none text-success">
                  mauricechisom275@gmail.com
                </a>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-75-85 mx-auto">
        <p className="text-white-50 text-center" data-aos="fade-up">
          WHAT I DO
        </p>
        <h1 className="text-center mb-3" data-aos="fade-up">
          Services
        </h1>
        <div className="row">
          <div className="col-md-4 text-center serv" data-aos="zoom-in-up">
            <div className="serv-icon m-3 text-success">
              <FaCode />
            </div>
            <h3>Web Design</h3>
            <p className="text-white-50">
              I value simple, modern, clean design patterns and thoughtful
              interactive user interfaces and improved user experience.
            </p>
          </div>
          <div className="col-md-4 text-center serv" data-aos="zoom-in-up">
            <div className="serv-icon m-3 text-success">
              <FaDatabase />
            </div>
            <h3>Perfomance and SEO</h3>
            <p className="text-white-50">
              Maintain a striking balance between functional and aesthetic
              design, optimizing web page perfomance and SEO.
            </p>
          </div>
          <div className="col-md-4 text-center serv" data-aos="zoom-in-up">
            <div className="serv-icon m-3 text-success">
              <FaMobileAlt />
            </div>
            <h3>Mobile friendly</h3>
            <p className="text-white-50">
              A responsive design makes your website accessible to all users,
              regardless of their devices.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="w-75-85 mx-auto">
        <p className="text-white-50 text-center" data-aos="fade-up">
          RECENT WORKS
        </p>
        <h1 className="text-center mb-3" data-aos="fade-up">
          Checkout a few of my projects
        </h1>

        {Projects.map((project, idx) => (
          <>
            <div
              className="row project"
              data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}
              key={`prj-${idx}`}>
              <div className={idx % 2 === 0 ? 'd-md-none' : 'col-md-6'}>
                <div className="position-relative icon">
                  <img src={project.coverImg} alt={project.name} />
                </div>
              </div>

              <div className="col-md-6">
                <p className="text-white-50 mt-3">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="text-white-50">
                  {project.desc}
                  <br />
                </p>
                <div className="stacks text-white-50 mb-4 d-flex flex-wrap">
                  {project.tools.map((val, idxx) => (
                    <div
                      className="bg-dark mt-md-0 mt-3 me-2 p-2 small-txt rounded"
                      key={`tool-${idx}-${idxx}`}>
                      {val}
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-decoration-none btn btn-outline-success">
                  View Project
                </a>
              </div>
              {idx % 2 === 0 ? (
                <div className="col-md-6 d-md-block d-none">
                  <div className="position-relative icon">
                    <img src={project.coverImg} alt={project.name} />
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </>
        ))}
      </section>

      <footer className="text-center p-5 w-75-85 m-auto">
        <div className="social pb-2">
          <a href="https://twitter.com/Cart_el990?s=09" target="_blank">
            <FaXTwitter className="twitter" />
          </a>
          <a href="https://github.com/muritz11" target="_blank">
            <FaGithub className="github" />
          </a>
          <a href="https://www.linkedin.com/in/maurice-chisom" target="_blank">
            <FaLinkedin className="linkedin" />
          </a>
        </div>
        <p className="text-mute">Copyright &copy; {currentYear} Muritz</p>
      </footer>

      <a
        href="#"
        className="btn btn-success position-fixed go2top"
        data-aos="fade-up">
        <FaChevronUp />
      </a>
    </>
  )
}

export default App
