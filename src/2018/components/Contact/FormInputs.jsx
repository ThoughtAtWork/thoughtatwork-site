import React from 'react';
import styles from '../../styles/2018/contact.module.scss';
import classnames from 'classnames';
import FormButton from './FormButton';

let FormInputs = function statelessFunctionComponentClassName() {
  return (
    <div className={classnames('container', 'gridish-container--complete', 'gridish-grid')}>

      <div className="container gridish-container--complete gridish-container gridish-grid__col--xsmall--4">
        <form>
          <label>Get in touch with us!</label>

          <div>
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              className={styles.enterField}
              onChange={this.handleChange}
              placeholder="John Smith"
            />
          </div>

          <div>
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              className={styles.enterField}
              onChange={this.handleChange}
              placeholder="john@smith.com"
            />
          </div>

          <div>
            <label>Subject *</label>
            <input
              type="subject"
              name="subject"
              className={styles.enterField}
              onChange={this.handleChange}
              placeholder="What's the topic?"
            />
          </div>

          <div>
            <label>Message *</label>
            <textarea
              name="message"
              className={styles.textArea}
              onChange={this.handleChange}
              placeholder="Give us a piece of your mind..."
            />
          </div>

          <FormButton />
        </form>
      </div>

    </div>
  );
};

export default FormInputs;