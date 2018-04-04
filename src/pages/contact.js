import React from "react";
import Link from "gatsby-link";

const ContactPage = () => (
  <div>
    <h1>Speakers Page</h1>
    <p>Currently under construction</p>
    <Link to="/">Go back to the homepage</Link>

    <form
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <p className="hidden">
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />{" "}
        </label>
      </p>
      <p>
        <label>
          Email: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default ContactPage;
