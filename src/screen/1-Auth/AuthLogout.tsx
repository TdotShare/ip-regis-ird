import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { deleteUser, setLoginfail } from '../../store/reducer/User';


const AuthLogout = () => {

  const dispatch = useDispatch()

  document.body.removeAttribute('class')

  React.useEffect(() => {
    dispatch(deleteUser())
    dispatch(setLoginfail())
    // eslint-disable-next-line 
  }, [])

  


  return <Navigate to="/login" />
};

export default AuthLogout;