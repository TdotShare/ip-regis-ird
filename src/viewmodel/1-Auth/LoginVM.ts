
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addUser, deleteUser, setLoginfail, setLoginSuccess } from '../../store/reducer/User';
import { routerPathUser } from '../../utils/routerpath';
import exportedSwal from '../../utils/swal';
import exportedAPIAuthentication from '../../utils/api/Authentication';
import React from 'react';
import { HOST } from '../../config/host';

export default function LoginVM() {

  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");


  const dispatch = useDispatch()

  const navigate = useNavigate();

  React.useEffect(() => {

    if (splitLocation.includes(`callback`)) {
      exportedSwal.actionSuccess(`กรุณารอสักครู่ระบบกำลังตรวจสอบการ login !`)
      dataLoginRmuti()
    }else{
      dispatch(deleteUser())
      dispatch(setLoginfail())
    }

    // eslint-disable-next-line
  }, [])

  const actionGoToRmutiLogin = () => {
    window.location.href = `https://mis-ird.rmuti.ac.th/sso/auth/login?url=${HOST}/callback`
    //window.location.href = `https://api.rmuti.ac.th/sso/oauth?sv=test&redirect_uri=${HOST}`
  }

  const dataLoginRmuti = async () => {

    const res = await exportedAPIAuthentication.getLoginTest()

    if (res.bypass) {

      let user = res.data

      //console.log(user)

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
      //console.log(res)
      exportedSwal.actionInfo(res.message)
    }

  }


  return {
    dataLoginRmuti,
    actionGoToRmutiLogin,
  }
}