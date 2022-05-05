
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, setLoginSuccess } from '../../store/reducer/User';
import { routerPathUser } from '../../utils/routerpath';
import exportedSwal from '../../utils/swal';
import exportedAPIAuthentication from '../../utils/api/Authentication';

export default function LoginVM() {

    const dispatch = useDispatch()

    const navigate = useNavigate();


    const actionGetMe = async () => {
        const res = await exportedAPIAuthentication.getUserRmuti()
        console.log(res)
    }

    const actionLoginRmuti = async () => {

        const res = await exportedAPIAuthentication.getUserRmuti()
    
        if(res.bypass) {

            let user = res.data
    
            dispatch(addUser({
                id: user.id,
                uid: user.uid,
                card_id:  user.card_id,
                firstname_th:  user.firstname_th,
                lastname_th: user.lastname_th,
                email: user.email,
                token : user.token,
                role: user.role
            }))

          dispatch(setLoginSuccess())
    
          navigate(routerPathUser.Regis)
    
        }else{
    
          if(res.status === 'login'){
            window.location.href = 'https://mis-ird.rmuti.ac.th/sso/auth/login?url=https://ip.ird.rmuti.ac.th/regisip/login'
          }
    
          if(res.message !== ""){
            exportedSwal.actionInfo(res.message)
          }
        }
    
    }


    return {
        actionGetMe,
        actionLoginRmuti,
    }
}