import React from "react";

let FooterBottom = function statelessFunctionComponentClass() {
    return (
        <div className="footer-bottom">
                    <div className="footer-text">
                        <p className="footer-p">
                            Special thanks to Josh Owen, Bruce Leonard, Adam
                            Smith, and Carol Rouhana
                        </p>
                        <p className="copyright">
                            © 2017 Thought At Work. All rights reserved
                        </p>
                    </div>
                    <div className="social-media">
                        <div className="icon">
                            <a href="https://www.facebook.com/ThoughtAtWork/">
                                <i
                                    className="fa fa-facebook-official fa-2x"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/taw_rit/">
                                <i
                                    className="fa fa-twitter fa-2x"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://twitter.com/taw_rit?lang=en">
                                <i
                                    className="fa fa-instagram fa-2x"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>
                </div>
    );
};

export default FooterBottom;
