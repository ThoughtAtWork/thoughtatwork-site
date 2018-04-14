import React from "react";

let CheckListItem = function statelessFunctionComponentClass(props) {
    let name = props.name;
    let desc = props.desc;

    return (
        <div className="info_essential">
            <input className="checkbox" type="checkbox"></input>
            <div className="essential__info-block">
                <p className="checklist_headline">{name}</p>
                <p className="checklist_byline">{desc}</p>
            </div>
        </div>
    );
};

export default CheckListItem;
