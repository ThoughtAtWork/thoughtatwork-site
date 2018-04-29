import React from "react";
import Link from "gatsby-link";
import RITMap from "./map.jsx"

class InfoGetHere extends React.Component {
	render() {
		return(
			<div className="flex gethere">
				<div className="gethere_container info-container">
					<h2 className="gethere_header">send me on my way</h2>

					<div className="gethere__info-block">
						<p className="gethere_text">Rochester Institute of Technology (RIT) is located at 1 Lomb Memorial Drive, Rochester, NY 14623. Approximately 20 minutes from Greater Rochester International Airport and the Amtrak and Bus stations, there are multiple ways
							to travel to Rochester and TAW. For information on transportation use these links:</p>
						<div className="gethere_link">
							<p className="gethere_text">
								<a href="http://www.visitrochester.com" target="_blank">VISITROCHESTER.COM
									<span className="info_arrow">&rarr;</span>
								</a>
							</p>
							<p className="gethere_text">
								<a href="http://www.rit.edu" target="_blank">RIT.EDU
									<span className="info_arrow">&rarr;</span>
								</a>
							</p>
						</div>
						<p className="gethere_text">Once you arrive on campus, signs will direct you to parking in lots G and H and to the check-in at Booth Hall (Building 7A). If you arrive on Friday, you'll need to get a visitor pass from the welcome center located on Lomb
							Memorial Drive, just past the roundabout.</p>
					</div>

					<div className="gethere_map">
						<RITMap 
							isMarkerShown={false}
							googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9dNBA2uR5suohNUMmTWz28aYV52lBCPE"
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `100%` }} />}
							mapElement={<div style={{ height: `42vw`, width: `50vw` }} />}
						/>

						<div>
							<br/>
							<a href="http://www.rit.edu/fa/facilities/maps">RIT INTERACTIVE MAP
								<span className="info_arrow">&rarr;</span>
							</a>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default InfoGetHere;
