
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, setLoginSuccess } from '../../store/reducer/User';
import { routerPathUser } from '../../utils/routerpath';

import axios from "axios";
import { API } from '../../config/api';
import { APIAuth_data } from '../../model/1-Auth/Account';
import exportedSwal from '../../utils/swal';

export default function LoginVM() {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const actionLogin = async () => {

        const res = await axios.post<APIAuth_data>(`${API}/auth/login`, { username: "jirayu.co", password: "" });
        
        try {

            if (res.data.bypass) {

                console.log(res.data.data)

                let user = res.data.data


                dispatch(addUser({
                    id: user.id,
                    uid: user.uid,
                    card_id:  user.card_id,
                    firstname_th:  user.firstname_th,
                    lastname_th: user.lastname_th,
                    email: user.email,
                    token : user.token,
                    role: "admin"
                }))

                dispatch(setLoginSuccess())

                navigate(routerPathUser.Regis)

            } else {
                exportedSwal.actionInfo(res.data.message)
            }

        } catch (error) {
            console.log("error")
        }

    };


    return {
        actionLogin,
    }
}