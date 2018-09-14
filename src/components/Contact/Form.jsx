import React, { Component } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form
          id="contactForm"
          className="gridish-container--complete form__margin-top"
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <label>
            <p className={'gridish-grid form-element__label'}>
              <strong>
                Full Name
                <span className={'form-element__label__red'}> *</span>
              </strong>
            </p>
            <div className={
              'form-text_input__field gridish-container--complete form-element__margin-top form-element__margin-bottom'}>
              <input
                type="text"
                name="name"
                required
                onChange={this.handleChange}
                placeholder="Your Name"
                className={'form-text_input__text'}
              />
            </div>
          </label>

          <label>
            <p className={'gridish-grid form-element__label'}>
              <strong>
                Email Address
                <span className={'form-element__label__red'}> *</span>
              </strong>
            </p>
            <div className={
              'form-text_input__field gridish-container--complete form-element__margin-top form-element__margin-bottom'}>
              <input
                type="email"
                name="email"
                required
                onChange={this.handleChange}
                placeholder="Your Email"
                className={'form-text_input__text'}
              />
            </div>
          </label>

          <label>
            <p className={'gridish-grid form-element__label'}>
              <strong>
                Message
                <span className={'form-element__label__red form-element__message__margin-top'}> *</span>
              </strong>
            </p>
            <div className={
              'form-text_input__field gridish-container--complete form-element__margin-top form-element__margin-bottom'}>
              <textarea
                name="message"
                required
                onChange={this.handleChange}
                placeholder="Give us a piece of your mind..."
                className={'form-text_input__text'}
                rows="4"
              />
            </div>
          </label>

          <div className="gridish-container--complete form-element__margin-top form-element__margin-bottom form-actionButton">
            <button
              type="submit"
              className="form-actionButton__text"
            >
            send message
            </button>
          </div>
        </form>
      </div>
    );
  }
}
