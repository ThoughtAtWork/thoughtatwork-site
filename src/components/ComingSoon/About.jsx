import React from "react";

let About = function statelessFunctionComponentClass() {
    return (
        <div className="cs-offset cs-about">
            <div className="flex-align-center">
                <p className="cs-h1 cs-about-title">What Is Thought At Work?</p>
                <p className="cs-p cs-about-content">
                    Thought At Work is a chance to immerse yourself in the
                    design world outside of your campus or office.
                </p>
                <p className="cs-p cs-about-content cs-about-content-p2">
                    Participate in invaluable workshops, cool events, tasty
                    meals, insightful talks, parties, after-parties and
                    countless opportunities to network.
                </p>
            </div>
            <div className="cs-about-subscribe-button flex flex-align-items-center flex-justify-center">
                <p className="cs-about-subscribe-button-text">
                    Subscribe for Updates
                </p>
            </div>
        </div>
    );
};

export default About;
