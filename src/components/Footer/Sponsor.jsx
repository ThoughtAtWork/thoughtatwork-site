import React from "react";

let Sponsor = function statelessFunctionComponentClass(props) {
    let imageURL = "../assets/sponsor-logos/sponsor_" + props.imageURL;
    let imageName = props.imageName + " Logo";
    let imageSite = props.imageSite;

    return (
        <div className="logo-card">
            <a href={imageSite} target="_blank">
                <img className="sponsor-image" src={imageURL} alt={imageName} />
            </a>
        </div>
    );
};

export default Sponsor;
