import React from "react";
import Location from "./location.jsx"
import data from "../../assets/places_to_stay.json";
import classnames from "classnames";

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
			<div className={classnames('flex-align-center',
			'gridish-container',
			'gridish-grid',
			'gridish-container--complete',
			'gridish-grid',
			'flex-align-center',
			'container')}>
				{this.createLocations(data.stayLocations)}
			</div>
		);
	}
}

export default InfoWhereToStay;
