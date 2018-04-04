import React from "react";
import Link from "gatsby-link";
import Form from "./Form.jsx";
import Description from "./Description.jsx";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Description />
                <Form />
            </div>
        );
    }
}

export default Contact;
