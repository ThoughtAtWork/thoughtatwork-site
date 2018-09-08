import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <section className="form-section">

          <div className="contact-form-heading form-row-heading">
            <h2 className="form-title form-row-title">get in touch</h2>
          </div>

          <p className="text-align-left form-message">How can we help? -</p>

          <div className="form-row">
            <form id="contactForm" className="input-form grid"
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}>
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <p>
                <label>
                  <div className="input-field grid__col grid__col--1-of-2 grid__col--m-1-of-2">
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      className="form-control first-half form__input input-text"
                      placeholder="Your Name"

                    />
                  </div>
                </label>
              </p>
              <p>
                <label>
                  <div className="input-field grid__col grid__col--1-of-2 grid__col--m-1-of-2">
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      className="form-control first-half form__input input-text"
                      placeholder="Your Email"
                    />
                  </div>
                </label>
              </p>
              <p>
                <label>
                  <div className="input-field form-full-size grid__col grid__col--5-of-5">
                    <textarea
                      name="message"
                      onChange={this.handleChange}
                      className="form-control form__input contact-message"
                      placeholder="Your Message"
                    />
                  </div>
                </label>
              </p>
              <div className="text-align-right">
                <button type="submit" className="flex-inline flex-align-items-center flex-justify-center action--link--button submit-link" style={{ marginRight: 17 + 'px' }}>
                  <input type="submit" value="SUBMIT" className="action--link--button grid__col grid__col--m-1-of-5"></input>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>

        </section>
      </div>
    )
  }
}
