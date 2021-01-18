import React from "react";

import classes from "./ListItem.css"


const listItem = (props) => {
    return (
        <div className={classes.ListItem}>
            <img src={props.photo} alt="_pic_" />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )

}

export default listItem;