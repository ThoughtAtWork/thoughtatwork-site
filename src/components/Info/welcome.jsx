import React from 'react';

class Welcome extends React.Component {
	render() {
		return(
			<div className="flex welcome">
				<div className="info_welcome_container info-container">
					<h2 className="welcome__header">welcome to TAW</h2>

					<div className="info__check-in">
						<div className="info_welcome_image">
						</div>
						<div className="info_checkin welcome__info-block">
							<h4 className="info_checkin_title">Check-in</h4>
							<p>Check-in begins at 9am on Friday morning. The opening reception begins at 10:30am. At check-in you’ll get a lanyard and name tag, which you’ll need for entry into any Thought at Work event.</p><br/>
							<p>You’ll also pick up a program brochure for a detailed view of the conference and schedule.</p>
						</div>
					</div>

					<div className="info__catering">
						<img src="../assets/graphics/catering.png" className="catering__img"></img>
						<div className="welcome__info-block">
							<h4 className="info_checkin_title">Catering</h4>
							<p>Not only do we bring you some of the world's best creatives, we also provide something equally enticing&mdash; free food. These meals are on us:</p>
							<div className="info_catering_meals">
								<p>Friday's Dinner</p>
								<p>Saturday's Breakfast</p>
								<p>Sunday's Breakfast</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Welcome;