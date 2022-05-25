import axios from "axios";

const API_URL = '/api/comments'
const getComment = async(token) =>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

const commentService = {
    getComment
}

export default commentService