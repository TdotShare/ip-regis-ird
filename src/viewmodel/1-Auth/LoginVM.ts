
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, setLoginSuccess } from '../../store/reducer/User';
import { routerPathUser } from '../../utils/routerpath';

export default function LoginVM() {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const actionLogin = () => {

        dispatch(addUser({
            user_id: 1,
            firstname: "jirayu",
            lastname: "tester",
            uid: "jirayu.co",
            idcard: "1309901343xxx",
            email: "jirayu.co@rmuti.ac.th",
            token: "",
            role: "admin"
        }))

        dispatch(setLoginSuccess())

        navigate(routerPathUser.Regis)
    };


    return {
        actionLogin
    }
}