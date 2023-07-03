import axios from "axios";
const token=localStorage.getItem('token')
export default axios.create({
    baseURL: "http://localhost:3000"
    ,
    headers: {
      
        "Content-Type":"multipart/form-data",
       
    },

    headers: {"Authorization" : `Bearer ${token}`}
});