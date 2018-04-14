import React from "react";

let Speaker = function statelessFunctionComponentClass(props) {
    let fields = props.fields;
    let firstName = props.firstName;
    let lastName = props.lastName;
    let position = props.position;
    let company = props.company;
    let key = props.lastName;

    let imageURL =
        "../assets/graphics/speakers/" +
        firstName.toLowerCase().replace(/[\. ,:-]+/g, "") +
        "_" +
        lastName.toLowerCase().replace(/[\. ,:-]+/g, "") +
        ".png";

    return (
        <div className="speaker speakers-card--grid grid__col grid__col--1-of-3 grid__col--m-1-of-2 grid__col--centered">
            <div className="speakers-card__fields">{fields}</div>
            <div className="speakers-card__headshot">
                <img src={imageURL} key={key} />
            </div>
            <div className="card">
                <span className="card__header speakers-card__name">
                    {firstName} {lastName}
                </span>
                <span className="card__subhead speakers-card__position">
                    {position} at {company}
                </span>
            </div>
        </div>
    );
};

export default Speaker;
