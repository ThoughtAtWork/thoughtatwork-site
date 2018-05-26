import React from "react";

let KeynoteSpeaker = function statelessFunctionComponentClass(props) {
    let headshot = props.headshot;
    let firstName = props.firstName;
    let lastName = props.lastName;
    let position = props.position;
    let company = props.company;
    let key = lastName;

    return (
        <div className="card speaker speakers-card--keynote">
          <img src={headshot} key={key} className="speakers-card__headshot"></img>
          <span className="card__header speakers-card__name">{firstName}<br></br>{lastName}</span>
          <span className="card__subhead speakers-card__position">{position} at {company}</span>
          <div className="speakers-card__backing-img">
            <img src="../assets/graphics/TAW-Vis-Dev-6-Edit.jpg"></img>
          </div>
        </div>
    );
};

export default KeynoteSpeaker;
