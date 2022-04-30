
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { APIAccount_data } from '../../../model/Account';
import exportedAPIAccount from '../../../utils/api/Account';
import { useQuery, useQueryClient } from 'react-query';
import { RootState } from '../../../store/ConfigureStore';

export default function AccountVM() {


    //const { id }: any = useParams();

    const user = useSelector((state: RootState) => state.user.data)

    //const queryClient = useQueryClient()

    const qe_account_data = useQuery<APIAccount_data, Error>('getAccount', async () => exportedAPIAccount.getAccount(user.token))



    return {
        qe_account_data,
    }
}