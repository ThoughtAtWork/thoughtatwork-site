import React from "react";

let Footer = function statelessFunctionComponentClass() {
    return (
        <div className="cs-topLevelNav-container flex flex-align-center flex-justify-between">
            <div className="cs-left-offset flex-align-center flex-inline">
                <p className="text-capitalize cs-topLevelNav-text">Contact Us</p>
            </div>
            <div className="flex-inline cs-right-offset">
                <p className="cs-topLevelNav-text">Code of Conduct</p>
            </div>
        </div>
    );
};

export default Footer;