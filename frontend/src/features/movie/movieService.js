import axios from "axios";

const API_URL = '/api/goals/'

// get data movie
const getData = async (token) =>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

const movieService = {
    getData,
}

export default movieService