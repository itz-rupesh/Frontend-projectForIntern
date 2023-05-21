import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShowWorkLocations from "../setupOrg/ShowWorkLocations";
import { BASE_URL } from "../../services/helper";
const ShowOrgLocations = () => {

    const [locations, setLocations] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/org/info/locations`, { withCredentials: true })
            .then((res) => {
                setLocations(res.data.locations);
                // console.log(achievements);
            }).catch((err) => {
                // cogoToast.error(err.response.data.error);
            })
    }, []);



    return (<ShowWorkLocations
        locations={locations}
        showDeleteBtn={false}
    />
    );
}

export default ShowOrgLocations;
