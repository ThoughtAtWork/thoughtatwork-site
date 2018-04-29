import React from "react";
import Link from "gatsby-link";

class InfoNavigation extends React.Component {
    render() {
        return (
        	<div className="category_bar__info flex text-align-center flex-wrap">
    			<Link to="/info-gethere/" className="flex flex-column flex-justify-center day_option category_item__info schedule-filter-active">
    				<p>GETTING HERE</p>
    			</Link>
    			<Link to="/info-welcome/" className="flex flex-column flex-justify-center day_option category_item__info">
    				<p>WHEN YOU'RE HERE</p>
    			</Link>
    			<Link to="/info-essentials/" className="flex flex-column flex-justify-center day_option category_item__info">
    				<p>WHAT TO BRING</p>
    			</Link>
    			<Link to="/info-wheretostay/" className="flex flex-column flex-justify-center day_option category_item__info">
    				<p>WHERE TO STAY</p>
    			</Link>
    		</div>
        );
    }
}

export default InfoNavigation;
