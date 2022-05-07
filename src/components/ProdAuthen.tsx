import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { APIRegisProject_data } from '../model/RegisProject';
import { RootState } from '../store/ConfigureStore';
import exportedAPIProject from '../utils/api/Project';
import { routerPathUser } from '../utils/routerpath';
import exportedSwal from '../utils/swal';
import LoadingData from './LoadingData';

type AppProps = {
    children: React.ReactNode,
};

function ProdAuthen({ children }: AppProps) {

    const { id }: any = useParams();
    const user = useSelector((state: RootState) => state.user.data)

    const queryClient = useQueryClient()

    const query_project_data = useQuery<APIRegisProject_data, Error>('getProject', async () => exportedAPIProject.getProject(id, user.token), { keepPreviousData: false })

    React.useEffect(() => {
        return () => {
            queryClient.removeQueries('getProject')
        }

        // eslint-disable-next-line
    }, [])


    if (query_project_data.isLoading) {
        <LoadingData />
    }

    if (query_project_data.data?.bypass === false) {
        exportedSwal.actionInfo(query_project_data.data?.message)
        return <Navigate to={routerPathUser.Regis} />
    }

    return <>{children}</>
}

export default ProdAuthen