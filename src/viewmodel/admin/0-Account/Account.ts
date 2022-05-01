
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { APIAccount_data } from '../../../model/Account';
import exportedAPIAccount from '../../../utils/api/Account';
import { useQuery, useQueryClient } from 'react-query';
import { RootState } from '../../../store/ConfigureStore';
import React, { useState } from 'react';
import { debounce } from "lodash"


export default function AccountVM() {


    //const { id }: any = useParams();

    const user = useSelector((state: RootState) => state.user.data)

    //const queryClient = useQueryClient()


    // React.useEffect(() => {
    //     return () => {
    //       debouncedSearch.cancel();
    //     };
    //   }, [debouncedSearch]);

    const [textSearch , setTextSearch] = useState("")
    const [page, setPage] = React.useState(0)

    const debouncedInputSearch = React.useRef(
        debounce(async (text) => {
            setPage(0)
            setTextSearch(text)
        }, 300)
    ).current;

    const inputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        debouncedInputSearch(event.target.value);
    };



    const qe_account_data = useQuery<APIAccount_data, Error>(['getAccount', page , textSearch],
        async () => exportedAPIAccount.getAccount(user.token, page , textSearch), { keepPreviousData: true })



    return {
        qe_account_data,
        debouncedInputSearch,
        inputSearch,
        setPage
    }
}