import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIFormAttachments_data } from '../../model/CoreForms/FormAttachments'
import { RootState } from '../../store/ConfigureStore'
import exportedAPICoreForms from '../../utils/api/CoreForm'
import exportedAPIFormCoreip from '../../utils/api/FormCoreip'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function FormAttachmentVM() {

   
    const { id }: any = useParams();

    
    const queryClient = useQueryClient()

    const user = useSelector((state: RootState) => state.user.data)
    const qe_attachments_data = useQuery<APIFormAttachments_data, Error>(keyQueryPath.getFormAttachment, async () => exportedAPICoreForms.getFormAttachments(id, user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `เอกสารแนบ`, url: "", active: true },
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
        qe_attachments_data
    }
}