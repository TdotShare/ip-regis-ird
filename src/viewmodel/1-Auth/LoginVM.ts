
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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

  const [searchParams] = useSearchParams();

  const [username, setUsername] = React.useState('')
  const [password, setPassowrd] = React.useState('')

  const onChangeSetUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onChangeSetPassowrd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassowrd(e.target.value)
  }

  React.useEffect(() => {

    if (splitLocation.includes(`callback_oauth`)) {
      exportedSwal.actionSuccess(`กรุณารอสักครู่ระบบกำลังตรวจสอบการ login !`)
      //dataLoginRmuti()
      dataLoginTest()
    }else{
      dispatch(deleteUser())
      dispatch(setLoginfail())
    }

    // eslint-disable-next-line
  }, [])

  const actionGoToRmutiLogin = () => {
    //window.location.href = `https://mis-ird.rmuti.ac.th/sso/auth/login?url=${API}/auth/create_user_rmuti`
    window.location.href = `https://api.rmuti.ac.th/sso/oauth?sv=test&redirect_uri=${HOST}`
  }

  const dataLoginTest = async () => {

    const res = await exportedAPIAuthentication.getLoginTest()

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


  const dataLoginRmuti = async () => {

    let code = searchParams.get('code');
    let token_rmuti = await exportedAPIAuthentication.getTokenRmuti(code!)
    if(token_rmuti.ok !== false){

        let user_data = await  exportedAPIAuthentication.getUserRmuti(token_rmuti.access_token)

        if(user_data.type !== 'staff'){
          exportedSwal.actionInfo('กรุณาเลือก เข้าถึงสิทธิ์เป็น `เจ้าหน้าที่` !')
          return
        }

        const res = await exportedAPIAuthentication.loginRmuti(user_data)

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

  }



  const actionLoginRmuti = async () => {


    if (username === '' || password === '') {
      exportedSwal.actionInfo("กรุณากรอก username และ password ในการเข้าสู่ระบบ !")
      return
    }



    let data = {
      uid: username,
      card_id: password
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
    dataLoginTest,
    dataLoginRmuti,
    actionGoToRmutiLogin,
    onChangeSetUsername,
    onChangeSetPassowrd,
    actionLoginRmuti,
  }
}