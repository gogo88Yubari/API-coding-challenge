import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import axios from "axios";

import ListItem from "../../components/ListItem/ListItem"



class ListBuild extends Component {
    state = {
        newData: []
    };

    componentDidMount() {
        axios.get("https://itk-exam-api.herokuapp.com/api/offices")
            .then(response => {
                // console.log(response.data)
                this.setState({ newData: response.data.slice(0, 3) })
            })
    }

    render() {
        const loadListData = this.state.newData.map(e => {
            return (
                <ListItem
                    key={e.id}
                    photo={e.photo}
                    name={e.name}
                    description={e.description} />
            )
        })
        return (
            <Aux>
                { loadListData}
            </Aux>

        );
    }
}

export default ListBuild;