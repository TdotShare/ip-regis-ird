import { useState } from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIWarnIp_data } from '../../model/WarnIp'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIFormCoreip from '../../utils/api/FormCoreip'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'

export default function FormDetailsVM() {

   
    const { id }: any = useParams();

    const user = useSelector((state: RootState) => state.user.data)
    const qe_warnip_data = useQuery<APIWarnIp_data, Error>(keyQueryPath.getWarnip, async () => exportedAPIFormCoreip.getWarnMsg(id, user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `รายละเอียดงาน`, url: "", active: true },
        ]
    })

    return {
        ...values,
        id,
        user,
        qe_warnip_data
    }
}