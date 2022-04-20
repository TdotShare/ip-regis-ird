import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import { useNavigate } from 'react-router'
import { APIProject_data } from '../../model/2-Project/Project'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIProject from '../../utils/api/Project'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function RegisViewVM() {


    const { id }: any = useParams();


    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: "", active: true },
            { name: `${id}`, url: "", active: true },
        ]
    })

    return {
        ...values,
        id
    }
}