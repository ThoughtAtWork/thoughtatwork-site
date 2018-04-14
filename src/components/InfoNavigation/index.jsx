import React from "react";
import Link from "gatsby-link";

class InfoNavigation extends React.Component {
    render() {
        return (
        	<div className="category_bar__info flex text-align-center flex-wrap">
    			<Link to="/info-gethere/" className="flex flex-column flex-justify-center day_option category_item__info {%if activeInfo == 'gethere' %} schedule-filter-active {% endif %}">
    				<p>GETTING HERE</p>
    			</Link>
    			<Link to="/info-welcome/" className="flex flex-column flex-justify-center day_option category_item__info {%if activeInfo == 'whenhere' %} schedule-filter-active {% endif %}">
    				<p>WHEN YOU'RE HERE</p>
    			</Link>
    			<Link to="/info-essentials/" className="flex flex-column flex-justify-center day_option category_item__info {%if activeInfo == 'whatbring' %} schedule-filter-active {% endif %}">
    				<p>WHAT TO BRING</p>
    			</Link>
    			<Link to="/info-wheretostay/" className="flex flex-column flex-justify-center day_option category_item__info {%if activeInfo == 'wherestay' %} schedule-filter-active {% endif %}">
    				<p>WHERE TO STAY</p>
    			</Link>
    		</div>
        );
    }
}

export default InfoNavigation;
