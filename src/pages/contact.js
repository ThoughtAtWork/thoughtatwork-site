import React from "react";
import Link from "gatsby-link";

const ContactPage = () => (
  <div>
    <h1>Speakers Page</h1>
    <p>Currently under construction</p>
    <Link to="/">Go back to the homepage</Link>

   <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name"></input></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email"></input></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </div>
);

export default ContactPage;
