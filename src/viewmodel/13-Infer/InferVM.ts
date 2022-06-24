import React, { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIInfer_data } from '../../model/13-Infer/Infer'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIInfer from '../../utils/api/Infer'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function InferVM() {

    /** 
     * test pass 27-04-2022
     *  - get data
     *  - create data ( Infer )
     * test pass 02-05-2022
     *  - input data
    */


    const { id }: any = useParams();

    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const qe_infer_data = useQuery<APIInfer_data, Error>('getInfer', async () => exportedAPIInfer.getInfer(id, user.token))

    const queryClient = useQueryClient()

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `ข้อดีและลักษณะเฉพาะ`, url: "", active: true },
        ]
    })

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if (!formdata.get('infer_strength') || !formdata.get('infer_source') || !formdata.get('infer_pros')) {
            exportedSwal.actionInfo("กรอกข้อมูลให้ครบ !")
            return
        }

        let data = {
            infer_project_id: id,
            infer_strength: formdata.get('infer_strength'),
            infer_source: formdata.get('infer_source'),
            infer_pros: formdata.get('infer_pros'),
        }

        const res = await exportedAPIInfer.createInfer(data, user.token)

        if (res.bypass) {
            queryClient.invalidateQueries(keyQueryPath.getFormProjects)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            queryClient.invalidateQueries(keyQueryPath.getWarnip)
            exportedSwal.actionSuccess("บันทึกข้อมูลเรียบร้อย !")

        } else {
            //exportedSwal.actionInfo(res.message)
            exportedSwal.actionInfo("ไม่สามารถบันทึกข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !")
        }

    }

    return {
        ...values,
        id,
        ref_form,
        submitForm,
        qe_infer_data
    }
}