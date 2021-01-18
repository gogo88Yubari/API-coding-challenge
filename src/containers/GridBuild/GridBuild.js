import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import axios from "axios";

import GridItem from "../../components/GridItem/GridItem"



class GridBuild extends Component {
    state = {
        newData: []
    };

    componentDidMount() {
        axios.get("https://itk-exam-api.herokuapp.com/api/offices")
            .then(response => {
                // console.log(response.data)
                this.setState({ newData: response.data.slice(0, 8) })
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
            <Aux>
                { loadGridData}
            </Aux>

        );
    }
}

export default GridBuild;