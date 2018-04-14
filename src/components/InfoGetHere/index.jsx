import React from "react";
import Link from "gatsby-link";

class InfoGetHere extends React.Component {
	render() {
		return(
			/*
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.929500808641!2d-77.67488454840615!3d43.08497747904256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d14c603a147e55%3A0xbe7eb31ed5e22c03!2sRochester+Institute+of+Technology!5e0!3m2!1sen!2sus!4v1508013381397"
				frameborder="0"
				style="border:0"
				allowfullscreen
				className="gethere_map-iframe"></iframe>
			*/
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
						<p>Map goes here</p>

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
