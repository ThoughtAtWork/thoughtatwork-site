import React from 'react'
import Link from 'gatsby-link'
import '../../static/build/vendors/jquery.min.js'
import $ from '../../static/build/vendors/jquery.min.js'

class Navigation extends React.Component {



	render() {

		  $('.nav--toggle').click(function() {
			"use strict";
			document.getElementById("nav--mobile").style.width = "100%";
			$('body').addClass('noScroll');
		  });

		  $('.nav--overlay-content-link').click(function() {
			  "use strict";
	 		 document.getElementById("nav--mobile").style.width = "0%";
	 		 $('body').removeClass('noScroll');
		});

		  $('.nav--overlay-closebtn').click(function() {
			"use strict";
			document.getElementById("nav--mobile").style.width = "0%";
			$('body').removeClass('noScroll');
		  });




		return(

			<div>

				<header className="nav--header">
					<nav className="nav--container">
						<ul className="nav--list">
							<li className="nav--list-item">
								<Link to="/index" className="">Home</Link>
							</li>
							<li className="nav--list-item">
								<Link to="/speakers" className="">Speakers</Link>
							</li>
							<li className="nav--list-item">
								<Link to="/schedule" className="">Schedule</Link>

							</li>
							<li className="nav--list-item">
								<Link to="/info" className="">Info</Link>
							</li>
							<li className="nav--list-item">
								<Link to="/contact" className="">Contact</Link>

							</li>
							<li className="nav--list-item">
								<Link to="/about" className="">About</Link>

							</li>
							<li className="nav--list-item">
								<Link to="/register" className="">Register</Link>

							</li>
						</ul>

						<div className="nav--mobile-icons">

							<div className="nav--menu">
								<span className="nav--toggle">☰</span>
							</div>

							<div className="nav--logo">

								<Link to="/index">
									<img className="nav--brand" src="assets/graphics/brand.svg"/>
								</Link>
							</div>

							<div className="nav--register">
								<Link to="/register"></Link>
									<img className="nav--ticket" src="assets/graphics/icons/ticket.svg"/>
								</div>

							</div>

							<div id="nav--mobile" className="nav--overlay">

								<Link to="javascript:void(0)" className="nav--overlay-closebtn">&times;</Link>

								<div className="nav--overlay-content">

									<Link to="/index" className="nav--overlay-content-link">HOME</Link>
									<Link to="/speakers" className="nav--overlay-content-link">SPEAKERS</Link>
									<Link to="/info-gethere" className="nav--overlay-content-link">INFO</Link>
									<Link to="/about" className="nav--overlay-content-link">ABOUT</Link>
									<Link to="/schedule" className="nav--overlay-content-link">SCHEDULE</Link>
									<Link to="/contact" className=" nav--overlay-content-link">CONTACT</Link>
									<Link to="/register" className=" nav--overlay-content-link">REGISTER</Link>

									<div className="nav--social">
										<a className="nav--social-link" href="https://facebook.com/ThoughtAtWork">
											<img className="nav--social-image" src="assets/graphics/facebook.svg"/>
										</a>
										<a className="nav--social-link" href="https://twitter.com/taw_rit">
											<img className="nav--social-image" src="assets/graphics/twitter.svg"/>
										</a>
										<a className="nav--social-link" href="https://instagram.com/taw_rit">
											<img className="nav--social-image" src="assets/graphics/instagram.svg"/>
										</a>
									</div>

									<p className="nav--overlay-text"><em>Special Thanks</em> to Lorraine Justice,
										Josh Owen, Bruce Leonard, Adam Smith</p>
									<br/>
									<p className="nav--overlay-text">&copy;2017 Thought At Work. All rights reserved.</p>
								</div>

							</div>

						</nav>
					</header>
				</div>

			);
		}

	}

	export default Navigation
