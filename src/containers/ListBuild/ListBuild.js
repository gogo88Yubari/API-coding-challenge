import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import axios from "axios";

import ListItem from "../../components/ListItem/ListItem"
import Spinner from "../../components/UI/Spinner/Spinner"


class ListBuild extends Component {
    state = {
        newData: [],
        error: false
    };

    componentDidMount() {
        axios.get("https://itk-exam-api.herokuapp.com/api/offices")
            .then(response => {
                // console.log(response.data)
                this.setState({ newData: response.data.slice(0, 3) })
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: true })
            });
    }

    render() {
        let loadListData = this.state.error ?
            <h1 style={{ textAlign: "center" }} > Error 404</h1 >
            : this.state.newData.map(e => {
                return (
                    <ListItem
                        key={e.id}
                        photo={e.photo}
                        name={e.name}
                        description={e.description} />
                )
            })


        return (
            !this.state.newData ? <Spinner /> :
                <Aux>
                    {loadListData}
                </Aux >

        );
    }
}

export default ListBuild;