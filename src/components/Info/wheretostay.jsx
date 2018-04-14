import React from 'react';

/*{% for location in stayLocations %}
<div className="wheretostay_locations">
	<p className="location__info">{{location.name}}<br />{{location.address}}</p>
	<p className="location__travel-time">{{location.travelTime}} min drive away from RIT</p>
	<a href="{{location.website}}" className="location__website">WEBSITE &rarr;</a>
</div>
{% endfor %}*/

class WhereToStay extends React.Component {
	render() {
		return(
			<div className="flex wheretostay">
				<div className="wheretostay_locations_container info-container">
					<h2 className="wheretostay_header">hotels</h2>
					
					/* List of hotel locations go here */

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

export default WhereToStay;