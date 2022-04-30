import axios from "axios";
import { API } from "../../config/api";
import { APIAccount_data } from "../../model/Account";



const getAccount = async (token: String, number: number, textSearch: string) => {

    if (textSearch !== "") {

        const res = await axios.get<APIAccount_data>(`${API}/admin/account?page=${number}&keyword=${textSearch}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });


        return res.data

    } else {

        const res = await axios.get<APIAccount_data>(`${API}/admin/account?page=${number}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });


        return res.data

    }

}

const exportedAPIAccount = {
    getAccount,
};

export default exportedAPIAccount;