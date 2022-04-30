import axios from "axios";
import { API } from "../../config/api";
import { APIAccount_data } from "../../model/Account";



const getAccount = async (token : String) => {
    const res = await axios.get<APIAccount_data>(`${API}/helpers/bio` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const exportedAPIAccount = {
    getAccount,
};

export default exportedAPIAccount;