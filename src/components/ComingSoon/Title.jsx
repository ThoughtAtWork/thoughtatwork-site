import React from "react";

let Title = function statelessFunctionComponentClass() {
    return (
        <div className="flex flex-align-center flex-justify-between cs-title">
            <div className="flex-align-center cs-left-offset cs-right-offset">
                <p className="cs-h1">A design conference made for students, by students</p>
                <p className="cs-p cs-title-when">Coming soon, October 21-23, 2018</p>
            </div>
        </div>
    );
};

export default Title;