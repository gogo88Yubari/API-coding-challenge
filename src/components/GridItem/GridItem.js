import React from "react";

import classes from "./GridItem.css"


const gridItem = (props) => {
    return (
        <div className={classes.GridItem}>
            <img src={props.photo} alt="_pic_" />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )

}

export default gridItem;