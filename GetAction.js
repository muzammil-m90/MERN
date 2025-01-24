import { getUrlFromApi } from "./EndPoint";
import axios from 'axios';
import { toast } from "react-toastify";

const userData = async() => {
    try {
        let response = await axios.get(`${getUrlFromApi.userDetails}`);
        if(response && response?.data){
            return response.data
        }

    }catch(err){
        toast.err("Data Errors while Retriving",err);
    }
};

export default userData;