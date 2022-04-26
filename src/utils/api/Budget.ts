import axios from "axios";
import { API } from "../../config/api";
import { APIBudget_data } from "../../model/9-Budget/Budget";
import { APIResponse_data } from "../../model/Response";



const getBudget = async (id : number , token : String) => {
    const res = await axios.get<APIBudget_data>(`${API}/user/budget/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const createBudget = async (data : any , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/budget/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}




const exportedAPIBudget = {
    getBudget,
    createBudget,
};

export default exportedAPIBudget;