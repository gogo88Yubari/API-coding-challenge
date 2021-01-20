import React, { Component } from "react";
import axios from "axios";

import GridItem from "../../components/GridItem/GridItem";
import classes from "./GridBuild.css";
import Spinner from "../../components/UI/Spinner/Spinner";




class GridBuild extends Component {
    state = {
        newData: [],
        error: false
    };

    componentDidMount() {
        axios.get("https://itk-exam-api.herokuapp.com/api/offices")
            .then(response => {
                // console.log(response.data)
                this.setState({ newData: response.data })
            })
            .catch(error => {
                // console.log(error)
                this.setState({ error: true })
            });
    }

    render() {
        let loadGridData = this.state.error ?
            <h1 style={{ textAlign: "center" }} > Error 404</h1 >
            : this.state.newData.map(e => {
                return (
                    <GridItem
                        key={e.id}
                        photo={e.photo}
                        name={e.name}
                        description={e.description} />
                )
            })
        return (
            !this.state.newData ? <Spinner /> :
                <section className={classes.GridBuild}>
                    {loadGridData}
                </section>

        );
    }
}

export default GridBuild;