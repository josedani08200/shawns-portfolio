import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'
import pic08 from '../images/pic08.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="solutions"
          className={`${this.props.article === 'solutions' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Solutions</h2>
          <p>
            At Prophecy Web Solutions, we develop innovative and functional custom web applications that generate more revenue and improve efficiency for your business using the latest technology in the market
          </p>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <h3 className="major">Frontend</h3>
          <p>
            Our front-end toolbox extends from HTML, CSS, javascript, Angular, React, and SASS asset pre-compilers. We design your applications with built in standards-compliant and mobile responsive solutions
          </p>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <h3 className="major">Backend</h3>
          <p>
            Our back-end stack includes Ruby, Rails, JavaScript, and postgreSQL and SQL for database management. We aim to use the most efficient back-end technologies, allowing for fast development and testing, deployment, versatility, and customization
          </p>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <h3 className="major">API Integration</h3>
          <p>
            With thousands of APIs available on the market, we have the access and ability to incorporate them into your application depending on your business needs and goals. Whether you need analytics, weather, maps, nearby locations, payment processing, or social media APIs, we have the integration solution for you
          </p>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Projects</h1>
          <h2>Mission Booked | Web App</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h4>
            WHAT: Platform that connects users with the desire to get involved in their community with a volunteer event
          </h4>
          <h4>
            HOW: Created and managed our own API/database for the organizations and events rendered upon a query by the user
          </h4>
          <h4>
            TECH USED: Ruby, Rails, JavaScript, React, React on Rails, React Spring/Select, HTML/CSS, PostgreSQL, Axios
          </h4>
          <h2>Prophesea Fish Tracker + Forum | Web App | Coming Soon!</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h4>
            WHAT: Mobile and Web based application that allows users to search for sportfishing species and fishery information | Blog and Forum where fishermen can come together and disuss their favorite topics
          </h4>
          <h2>El Taco | Web App</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h4>
            WHAT: Platform that allows users to search for a wide variety of Taco recipes
          </h4>
          <h4>
            HOW: Utilized Edemam API allowing the site to render Taco recipe matches based on user query
          </h4>
          <h4>
            TECH USED: JavaScript, React, HTML/CSS, Express, Axios, Material UI
          </h4>
          <h2>YSK - Digital Gallery | Web App | Coming Soon!</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <h4>
            WHAT: Digital Gallery showcasing Artist's work with interactive interface
          </h4>
          <h2>Vida Healing - Life Coach | Web App | Coming Soon!</h2>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <h4>
            WHAT: Mobile and Web based Business application | Individual, Group, Marriage, and Couples Therapy
          </h4>
          <h2>Cana La Reina - Social Collective | Web App | Coming Soon!</h2>
          <span className="image main">
            <img src={pic06} alt="" />
          </span>
          <h4>
            WHAT: Digital Social Collective Agency
          </h4>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <h3>
            Prophecy Web Solutions is a full-service web development agency founded in 2020 in Miami, Florida.  Our goal is to provide clients with solutions that will increase business and online conversions by building custom, functional, visually appealing applications
          </h3>
          <span className="image main">
            <img src={pic08} alt="" />
            <h1></h1>
            <h1>
              <li>
                DEVELOPMENT
            </li>
            </h1>
            <h3>
              By utilizing the latest technologies on the market, we have the ability to quickly and efficiently get your application built out
            </h3>
            <h1>
              <li>
                CONSULTATION
              </li>
            </h1>
            <h3>
              We work closely with UX/UI designers and industry experts in order to educate and integrate, innovative design and optimization services
            </h3>
            <h1>
              <li>
                MANAGEMENT
            </li>
            </h1>
            <h3>
              Your application will be managed and hosted with cloud based platforms allowing for seamless and regular management to suite your business needs
            </h3>
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
