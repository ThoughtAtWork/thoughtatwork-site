import React from "react";
import Sponsor from "./Sponsor.jsx";
import FooterBottom from "./FooterBottom.jsx";
import BeSponsor from "./BeSponsor.jsx";
import data from "../../../assets/sponsors.json";

class Footer extends React.Component {
    createSponsor = sponsor => {
        return (
            <Sponsor
                imageURL={sponsor.image}
                key={sponsor.name}
                imageName={sponsor.name}
                imageSite={sponsor.site}
            />
        );
    };

    createSponsors = sponsors => {
        return sponsors.map(this.createSponsor);
    };

    render() {
        return (
            <div className="footer">
                <div className="footer-sponsors">
                    {this.createSponsors(data.sponsor)}
                    <BeSponsor />
                </div>
            </div>
        );
    <FooterBottom />
    }
}

export default Footer;
