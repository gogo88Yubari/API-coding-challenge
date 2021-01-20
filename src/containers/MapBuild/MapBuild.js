import React, { useState } from "react";
import useSwr from "swr";
import ReactMapGL, { Marker } from 'react-map-gl';

import classes from "./MapBuild.css";
import Spiner from "../../components/UI/Spinner/Spinner"

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function MapBuild() {
    const [viewport, setViewport] = useState({
        latitude: 44.786568,
        longitude: 20.4489216,
        width: "90vw",
        height: "90vh",
        zoom: 1.5
    });

    const apiUrl = "https://itk-exam-api.herokuapp.com/api/offices";
    const { data, error } = useSwr(apiUrl, fetcher);
    const locations = data && !error ? data.slice(0, 6) : [];

    return (
        !data ? <Spiner /> :
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactMapGL
                    {...viewport}
                    maxZoom={15}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/gogo-yubari/ckk422jzb4zn717nyom0fddec"
                    onViewportChange={nextViewport => setViewport(nextViewport)}>
                    {locations.map(pin => (
                        <Marker key={pin.id}
                            latitude={parseFloat(pin.latitude)}
                            longitude={parseFloat(pin.longitude)}>
                            <div className={classes.Pin}></div>
                            <div className={classes.Pulse}></div>
                        </Marker>
                    ))}
                </ReactMapGL>
            </div>
    );
}

