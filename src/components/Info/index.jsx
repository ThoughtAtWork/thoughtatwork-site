import React from "react";
import Link from "gatsby-link";
import GetHere from "./gethere.jsx";
import Welcome from "./welcome.jsx";
import Essentials from "./essentials.jsx";
import WhereToStay from "./wheretostay.jsx";

class Info extends React.Component {
    render() {
        return (
            <div className="container">
                <GetHere />
               	<hr/>
                <Welcome />
                <hr/>
                <Essentials />
                <hr/>
                <WhereToStay />
            </div>
        );
    }
}

export default Info;
