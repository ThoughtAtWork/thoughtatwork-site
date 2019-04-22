import React from 'react';
import classnames from 'classnames';

class Register extends React.Component {
  render() {
    return (
      <div className={classnames()}>
        <div className={classnames(
          'gridish-container--complete',
          'gridish-grid',
          'container', 'form-padding__bottom', 'flex', 'flex-justify-between', 'flex-align-center')}
        >
          <h1 className={classnames(
            'gridish-grid__col--small--3',
            'gridish-grid__col--xsmall--2',
          )}>thought at work 2018 registration
          </h1>
        </div>
        <form
          className="container form__margin-top gridish-container--complete gridish-grid"
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
                required
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
                required
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

          <div className="gridish-container--complete form-actionButton">
            <button
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

export default Register;
