import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIFormPotentials_data } from '../../model/CoreForms/FormPotentials'
import { APICoreIp_data } from '../../model/CoreIp'
import { RootState } from '../../store/ConfigureStore'
import exportedAPICoreForms from '../../utils/api/CoreForm'
import exportedAPIFormCoreip from '../../utils/api/FormCoreip'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function FormPotentialVM() {

   
    const { id }: any = useParams();

    const queryClient = useQueryClient()

    const user = useSelector((state: RootState) => state.user.data)
    const qe_coreip_data = useQuery<APICoreIp_data, Error>(keyQueryPath.getCoreip, async () => exportedAPIFormCoreip.getCoreIp(id, user.token))
    const qe_potential_data = useQuery<APIFormPotentials_data, Error>(keyQueryPath.getFormPotential, async () => exportedAPICoreForms.getFormPotentials(id, user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การประเมินศักยภาพผลงาน`, url: "", active: true },
        ]
    })


    const updateCoreIp = async (name : String , core_data : Number) => {

        let data = {
            core_project_id : id,
            [`${name}`] : `${core_data}`
        }

        const res = await exportedAPIFormCoreip.updateCoreIp(data , user.token)

        if(res.bypass){
            exportedSwal.actionSuccess(`อัปเดตข้อมูลสำเร็จ !`)
            queryClient.invalidateQueries(keyQueryPath.getCoreip)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
        }else{
            exportedSwal.actionSuccess(`ไม่สามารถอัปเดตข้อมูลได้ !`)
        }

    }

    return {
        ...values,
        id,
        user,
        queryClient,
        updateCoreIp,
        qe_coreip_data,
        qe_potential_data
    }
}