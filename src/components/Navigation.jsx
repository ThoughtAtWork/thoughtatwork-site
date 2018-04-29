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

		// console.log(this.props.location.pathname);


		return(

			<div>

				<header className="nav--header">
					<nav className="nav--container">
						<ul className="nav--list">
							<li className="nav--list-item">
								<Link to="/index" 	activeStyle={{
										color: 'black'
									}} className="">Home</Link>

								</li>
								<li className="nav--list-item">
									<Link to="/speakers" 	activeStyle={{
											color: 'black'
										}}className="">Speakers</Link>
								</li>
								<li className="nav--list-item">
									<Link to="/schedule" 	activeStyle={{
											color: 'black'
										}} className="">Schedule</Link>

								</li>
								<li className="nav--list-item">
									<Link to="/info" 	activeStyle={{
											color: 'black'
										}} className="">Info</Link>
								</li>
								<li className="nav--list-item">
									<Link to="/contact" 	activeStyle={{
											color: 'black'
										}} className="">Contact</Link>

								</li>
								<li className="nav--list-item">
									<Link to="/about" 	activeStyle={{
											color: 'black'
										}} className="">About</Link>

								</li>
								<li className="nav--list-item">
									<Link to="/register" 	activeStyle={{
											color: 'black'
										}} className="">Register</Link>

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

									<Link to="/index" 	activeStyle={{
											color: 'black'
										}} className="nav--overlay-content-link">HOME</Link>
									<Link to="/speakers" 	activeStyle={{
											color: 'black'
										}} className="nav--overlay-content-link">SPEAKERS</Link>
									<Link to="/info-gethere" 	activeStyle={{
											color: 'black'
										}} className="nav--overlay-content-link">INFO</Link>
									<Link to="/about" 	activeStyle={{
											color: 'black'
										}} className="nav--overlay-content-link">ABOUT</Link>
									<Link to="/schedule" 	activeStyle={{
											color: 'black'
										}} className="nav--overlay-content-link">SCHEDULE</Link>
									<Link to="/contact" 	activeStyle={{
											color: 'black'
										}} className=" nav--overlay-content-link">CONTACT</Link>
									<Link to="/register" 	activeStyle={{
											color: 'black'
										}} className=" nav--overlay-content-link">REGISTER</Link>

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
