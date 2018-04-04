import React from "react";

let Description = function statelessFunctionComponentClassName() {
    return (
            <section className="contact-info-section">
                <div className="contact-info-row">
                    <div className="text-align-right contact-info-heading">
                        <h2 className="text-align-right icon-row-heading register-icon-title">
                            we're here for you
                        </h2>
                    </div>
                </div>
                <figure className="contact-info-icon">
                    <img
                        className="icon-image icon-contact"
                        src="../assets/graphics/icons/mail.svg"
                        alt="contact-Info-Icon"
                    />
                </figure>
                <div className="contact-info-message">
                    <p>
                        Any questions or concerns? Perhaps you're interested in
                        speaking or sponsoring?
                    </p>
                    <p>Maybe we already have an answer to your question.</p>
                    <a className="text-uppercase" href="register.php">
                        Register Now &rarr;
                    </a>
                </div>
            </section>
    );
};

export default Description;