import React from "react";

import Header from "../Header"
import InfoGetHere from "../InfoGetHere"
import InfoWhereToStay from "../InfoWhereToStay"
import InfoWelcome from "../InfoWelcome"

import styles from "../../styles/components/info/InfoNavigation.module.scss"
import classnames from 'classnames';

class InfoNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			directionInfo: true,
			hotelInfo: false,
			otherInfo: false,
		};
		this.setActiveClass = this.setActiveClass.bind(this);
	}

	setActiveClass(currClass) {
		switch(currClass) {
			case "Directions": {
				if (!this.state.directionInfo) {
					this.setState({directionInfo: true, hotelInfo: false, otherInfo: false});
				}
			}
			break;

			case "Hotel": {
				if (!this.state.hotelInfo) {
					this.setState({directionInfo: false, hotelInfo: true, otherInfo: false});
				}
			}
			break;

			case "Other":
			default: {
				if (!this.state.otherInfo) {
					this.setState({directionInfo: false, hotelInfo: false, otherInfo: true});
				}
			}
			break;
		}
	}

    render() {
        return (
        	<div>
				<Header pageName="info" />
				<div className={styles.infoNavigation}>
					<div className={classnames(styles.infoDiv)}>
						<button 
							className={this.state.directionInfo ? classnames(styles.infoButton, styles.active) : styles.infoButton} 
							onClick={() => this.setActiveClass("Directions")}>
							directions
						</button>
					</div>
					<div className={classnames(styles.infoDiv)}>
						<button 
							className={this.state.hotelInfo ? classnames(styles.infoButton, styles.active) : styles.infoButton} 
							onClick={() => this.setActiveClass("Hotel")}>
							hotels
						</button>
					</div>
					<div className={classnames(styles.infoBigDiv)}>
						<button 
							className={this.state.otherInfo ? classnames(styles.infoButton, styles.active) : styles.infoButton} 
							onClick={() => this.setActiveClass("Other")}>
							everything else
						</button>
					</div>
				</div>

				{ this.state.directionInfo && <InfoGetHere /> }
				{ this.state.hotelInfo && <InfoWhereToStay /> }
				{ this.state.otherInfo && <InfoWelcome /> }
    		</div>
        );
    }
}

export default InfoNavigation;
