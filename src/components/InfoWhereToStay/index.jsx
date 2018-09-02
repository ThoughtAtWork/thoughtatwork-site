import React from "react";
import Location from "./location.jsx"
import data from "../../assets/places_to_stay.json";

class InfoWhereToStay extends React.Component {
    createLocation = location => {
    	return(
    		<Location
    			name={location.name}
    			address={location.address}
    			travelTime={location.travelTime}
    			website={location.website}
    			key={location.address}
    		/>
    	);
    }

    createLocations = locations => {
    	return locations.map(this.createLocation);
    }

	render() {
		return(
			<div className="flex wheretostay">
				<div className="wheretostay_locations_container info-container">
					<h2 className="wheretostay_header">hotels</h2>
					
					{this.createLocations(data.stayLocations)}

					<div className="couch_surfing_block">
						<p className="couch_surfing"><strong>Couch Surfing</strong></p>
						<p><strong>If you’re on a budget, many of our volunteers are happy 
						to offer their places for temporary stay. To apply, message us 
						through the site or email us at <a href="Hello@thoughatwork.com">Hello@thoughatwork.com</a>. 
						Do so soon! Space is limited.</strong></p>
					</div>
				</div>
			</div>
		);
	}
}

export default InfoWhereToStay;
