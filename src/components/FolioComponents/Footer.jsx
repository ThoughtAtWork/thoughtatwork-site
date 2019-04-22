import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="courtesy">
            <a href="mailto:frankjacob42@gmail.com?Subject=Hey%27s%20There" target="_top">Email Me</a>
            <a href="https://github.com/JacobDFrank">Github</a>
            <a href="https://www.linkedin.com/in/jacobdfrank">LinkedIn</a>
            <a href="https://twitter.com/jacobdfrank">Twitter</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
