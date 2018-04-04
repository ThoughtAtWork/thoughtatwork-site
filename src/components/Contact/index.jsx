import React from "react";
import Link from "gatsby-link";

class Contact extends React.Component {
    render() {
        return (
            <div className="">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field">
                    <input type="text" placeholder="Your Name" name="name" />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

export default Contact;
