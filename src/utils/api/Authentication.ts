import axios from "axios";
import { API } from "../../config/api";
import { UserRmuti } from "../../model/1-Auth/DataRmuti";
import { APIAuthentication_data } from "../../model/Authentication";


const getMe = async (token: String) => {
    const res = await axios.get<APIAuthentication_data>(`${API}/user/me`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getUserRmuti = async (token : string) => {
    const res = await axios.get<UserRmuti>(`https://api.rmuti.ac.th/api/v3/me`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res.data
}

const login = async (data: any) => {
    const res = await axios.post<APIAuthentication_data>(`${API}/auth/login`, data);
    return res.data
}

const loginRmuti = async (data: any) => {
    const res = await axios.post<APIAuthentication_data>(`${API}/auth/login_rmuti`, data);
    return res.data
}

const getLoginTest = async () => {
    const res = await axios.get<APIAuthentication_data>(`${API}/auth/login_test`);
    return res.data
}


const getTokenRmuti = async (token: string) => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "Test_id116");
    urlencoded.append("client_secret", "TesdGV+zdAT");
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("code", token);
    urlencoded.append("redirect_uri", `https://ip.ird.rmuti.ac.th/regisip/login/callback_oauth`);

    let res = await fetch("https://api.rmuti.ac.th/api/oauth/token", { method: "POST", headers: myHeaders, body: urlencoded, redirect: 'follow' })

    return res.json()
}

const exportedAPIAuthentication = {
    getUserRmuti,
    getMe,
    login,
    loginRmuti,
    getLoginTest,
    getTokenRmuti
};

export default exportedAPIAuthentication;