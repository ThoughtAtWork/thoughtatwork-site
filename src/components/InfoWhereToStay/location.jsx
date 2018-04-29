import React from "react";

let Location = function statelessFunctionComponentClass(props) {
    let name = props.name;
    let address = props.address;
    let travelTime = props.travelTime;
    let website = props.website;

    return (
        <div className="wheretostay_locations">
            <p className="location__info">{name}<br />{address}</p>
            <p className="location__travel-time">{travelTime} min drive away from RIT</p>
            <a href={website} className="location__website">WEBSITE &rarr;</a>
        </div>
    );
};

export default Location;
