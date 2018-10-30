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
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form
          id="contactForm"
          className="container form__margin-top gridish-container--complete gridish-grid"
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

          <label className={'flex-align-items-baseline flex-justify-between form-element__margin-bottom gridish-grid'}>
            <p className={'form-element__label gridish-grid__col--small--2 gridish-grid__col--xsmall--4'}>
              <strong>
                Full Name
                <span className={'form-element__label__red'}> *</span>
              </strong>
            </p>

            <div className={
              'form-element__margin-top form-text_input__field gridish-grid__col--small--5 gridish-grid__col--xsmall--4'}>
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

          <label className={'flex-align-items-baseline flex-justify-between form-element__margin-bottom gridish-grid'}>
            <p className={'form-element__label gridish-grid__col--small--2 gridish-grid__col--xsmall--4'}>
              <strong>
                Email Address
                <span className={'form-element__label__red'}> *</span>
              </strong>
            </p>
            <div className={
              'form-element__margin-top form-text_input__field gridish-grid__col--small--5 gridish-grid__col--xsmall--4'}>
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

          <label className={'form-element__message__padding-top flex-justify-between form-element__margin-bottom gridish-grid'}>
            <p className={'form-element__label gridish-grid__col--small--2 gridish-grid__col--xsmall--4'}>
              <strong>
                Message
                <span className={'form-element__label__red'}> *</span>
              </strong>
            </p>
            <div className={
              'form-element__margin-top form-text_input__field gridish-grid__col--small--5 gridish-grid__col--xsmall--4'}>
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
          <div data-netlify-recaptcha></div>
          <div className="gridish-container--complete form-actionButton">
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
