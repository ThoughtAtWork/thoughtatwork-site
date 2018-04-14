import React from 'react';

/*{% for item in essentials %}
	<div className="info_essential">
		<input className="checkbox" type="checkbox">
		<div className="essential__info-block">
			<p className="checklist_headline">{{item.name}}</p>
			<p className="checklist_byline">{{item.desc}}</p>
		</div>
	</div>
{% endfor %}*/

class Essentials extends React.Component {
	render() {
		return(
			<div className="flex essentials">
				<div className="info-container">
					<h2 className="checklist_header">the essentials</h2>
					<div className="checklist_container text-align-left">
						<p className="checklist_title">We've assembled a checklist for your planning needs&mdash;</p>
						
						/* Checklist goes here */
					</div>
				</div>
			</div>
		);
	}
}

export default Essentials;