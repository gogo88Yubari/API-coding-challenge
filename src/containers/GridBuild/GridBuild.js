import React, { Component } from "react";
import axios from "axios";

import GridItem from "../../components/GridItem/GridItem"
import classes from "./GridBuild.css"




class GridBuild extends Component {
    state = {
        newData: []
    };

    componentDidMount() {
        axios.get("https://itk-exam-api.herokuapp.com/api/offices")
            .then(response => {
                // console.log(response.data)
                this.setState({ newData: response.data })
            })
    }

    render() {
        const loadGridData = this.state.newData.map(e => {
            return (
                <GridItem
                    key={e.id}
                    photo={e.photo}
                    name={e.name}
                    description={e.description} />
            )
        })
        return (
            <section className={classes.GridBuild}>
                { loadGridData}
            </section>

        );
    }
}

export default GridBuild;