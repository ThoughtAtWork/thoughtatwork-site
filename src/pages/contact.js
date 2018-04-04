import React from "react";
import Link from "gatsby-link";

const ContactPage = () => (
  <div>
    <h1>Speakers Page</h1>
    <p>Currently under construction</p>
    <Link to="/">Go back to the homepage</Link>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="text" placeholder="Your Name" name="name" />
      <button>Send</button>
    </form>
  </div>
);

export default ContactPage;
