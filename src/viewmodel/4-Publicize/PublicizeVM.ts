import { useState } from 'react'
//import { useQuery, useQueryClient } from 'react-query'
//import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import { APIPeople_data } from '../../model/3-People/People'
//import { RootState } from '../../store/ConfigureStore'
//import exportedAPIPeople from '../../utils/api/People'
import { routerPathUser } from '../../utils/routerpath'
//import exportedSwal from '../../utils/swal'

export default function PeopleVM() {



    //const queryClient = useQueryClient()
    
    const { id }: any = useParams();

    //const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis , active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `นำเสนอ - การเปิดเผย - การเผยแพร่`, url: "", active: true },
        ]
    })


    return {
        ...values,
        id,
    }
}