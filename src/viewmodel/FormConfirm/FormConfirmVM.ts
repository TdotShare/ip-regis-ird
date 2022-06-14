import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/ConfigureStore'
import { routerPathUser } from '../../utils/routerpath'

export default function FormConfirmVM() {

   
    const { id }: any = useParams();

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `ส่งคำขอให้เจ้าหน้าที่`, url: "", active: true },
        ]
    })

    return {
        ...values,
        id,
        user
    }
}