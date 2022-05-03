
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, setLoginSuccess } from '../../store/reducer/User';
import { routerPathUser } from '../../utils/routerpath';
import exportedSwal from '../../utils/swal';
import exportedAPIAuthentication from '../../utils/api/Authentication';

export default function LoginVM() {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const actionLogin = async () => {

        const res = await exportedAPIAuthentication.login("jirayu.co" , "")

        if(res.bypass){

            let user = res.data

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

        }else{
            exportedSwal.actionInfo(res.message)
        }

    };


    return {
        actionLogin,
    }
}