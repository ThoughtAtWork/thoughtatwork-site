import React from "react";
import styles from '../../styles/contact.module.scss';
import { Link } from "react-router-dom";
import classnames from "classnames";

let Description = function statelessFunctionComponentClassName() {
    return (
        <div className={classnames('gridish-container--complete', 'gridish-grid')}>
            <Link className={styles.actionButtonLink} to="/contact/">
                <div className={styles.actionButton}>
                    <p className={styles.actionButtonText}>send message</p>
                </div>
            </Link>
        </div>
    );
};

export default Description;