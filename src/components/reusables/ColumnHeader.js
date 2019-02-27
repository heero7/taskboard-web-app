import React from "react";

import { CardPanel } from "react-materialize";

const defaultColor = "#7B9D96";

const ColumnHeader = (props) => {
    return (
        <div>
            <CardPanel className="teal lighten-4 black-text">
                <h3>{props.title}</h3>
            </CardPanel>
        </div>
    );
}

export default ColumnHeader;