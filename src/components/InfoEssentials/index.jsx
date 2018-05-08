import React from "react";
import Link from "gatsby-link";
import CheckListItem from "./checklist_item.jsx"
import data from '../../assets/essentials.json'

class InfoEssentials extends React.Component {
    createEssential = essential => {
		return(
			<CheckListItem
				name={essential.name}
				desc={essential.desc}
				key={essential.desc}
			/>
		);
	}

	createEssentials = essentials => {
		return essentials.map(this.createEssential)
	}

	render() {
		return(
			<div className="flex essentials">
				<div className="info-container">
					<h2 className="checklist_header">the essentials</h2>
					<div className="checklist_container text-align-left">
						<p className="checklist_title">We've assembled a checklist for your planning needs&mdash;</p>
						
						{this.createEssentials(data.essentials)}
					</div>
				</div>
			</div>
		);
	}
}

export default InfoEssentials;
