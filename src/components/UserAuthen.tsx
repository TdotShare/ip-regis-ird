import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { APIAuthentication_data } from '../model/Authentication';
import { RootState } from '../store/ConfigureStore';
import { deleteUser, setLoginfail } from '../store/reducer/User';
import exportedAPIAuthentication from '../utils/api/Authentication';
import { routerPathUser } from '../utils/routerpath';
import exportedSwal from '../utils/swal';

type AppProps = {
    children: React.ReactNode,
};

function UserAuthen({ children }: AppProps) {

    const dispatch = useDispatch()

    const user = useSelector((state: RootState) => state.user.data)

    //const queryClient = useQueryClient()

    const query_project_data = useQuery<APIAuthentication_data, Error>('getAuthenMe', async () => exportedAPIAuthentication.getMe(user.token))

    // React.useEffect(() => {
    //     return () => {
    //         queryClient.removeQueries('getAuthenMe')
    //     }
    // }, [])


    if (query_project_data.isLoading) {
        <></>
    }

    if (query_project_data.data?.bypass === false) {
        dispatch(deleteUser())
        dispatch(setLoginfail())
        exportedSwal.actionInfo("ระยะเวลาการใช้งานในระบบ หมดแล้วกรุณาเข้าสู่ระบบใหม่อีกครั้ง !")
        return <Navigate to={routerPathUser.Regis} />
    }

    return <>{children}</>
}

export default UserAuthen