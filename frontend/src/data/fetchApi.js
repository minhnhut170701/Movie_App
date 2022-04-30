import axios from "axios";

  
    const getMovie = async (API_URL) =>{
      const response = await axios.get(`${API_URL}`)

    
      return response.data
    }



export default getMovie