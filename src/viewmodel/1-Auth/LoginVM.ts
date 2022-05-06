
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, setLoginSuccess } from '../../store/reducer/User';
import { routerPathUser } from '../../utils/routerpath';
import exportedSwal from '../../utils/swal';
import exportedAPIAuthentication from '../../utils/api/Authentication';
import React from 'react';
import { API } from '../../config/api';

export default function LoginVM() {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const [username, setUsername] = React.useState('')
  const [password, setPassowrd] = React.useState('')

  const onChangeSetUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onChangeSetPassowrd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassowrd(e.target.value)
  }

  const actionGoToRmutiLogin = () => {
    window.location.href = `https://mis-ird.rmuti.ac.th/sso/auth/login?url=${API}/auth/create_user_rmuti`
  }

  const actionLoginRmuti = async () => {

    
    if(username === '' || password === ''){
      exportedSwal.actionInfo("กรุณากรอก username และ password ในการเข้าสู่ระบบ !")
      return
    }



    let data = {
      uid : username,
      card_id : password
    }

    const res = await exportedAPIAuthentication.login(data)

    if (res.bypass) {

      let user = res.data

      dispatch(addUser({
        id: user.id,
        uid: user.uid,
        card_id: user.card_id,
        firstname_th: user.firstname_th,
        lastname_th: user.lastname_th,
        email: user.email,
        token: user.token,
        role: user.role
      }))

      dispatch(setLoginSuccess())

      navigate(routerPathUser.Regis)

    } else {
      exportedSwal.actionInfo(res.message)
    }

  }


  return {
    username,
    password,
    actionGoToRmutiLogin,
    onChangeSetUsername,
    onChangeSetPassowrd,
    actionLoginRmuti,
  }
}