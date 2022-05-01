import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIPublicip_data } from '../../model/20-Publicip/Publicip'
import { APIMovant_data } from '../../model/7-Movant/Movant'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIPublicip from '../../utils/api/Publicip'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function PublicipVM() {


    const { id }: any = useParams();

    const queryClient = useQueryClient()
    
    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const qe_publicip_data = useQuery<APIPublicip_data, Error>('getPublicip', async () => exportedAPIPublicip.getPublicip(id, user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การประชาสัมพันธ์ผลงาน`, url: "", active: true },
        ]
    })

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(!formdata.get('public_agree_status')){
            exportedSwal.actionInfo("กรุณากรอกข้อมูลให้ครบ !")
            return 
        }

        if(Number(formdata.get('public_agree_status')) === 2){
            if(!formdata.get('public_agree_text')){
                exportedSwal.actionInfo("กรุณากรอกข้อมูลให้ครบ (ไม่ยิมยอม เพราะอะไรโปรดระบุ) !")
                return 
            }
        }

        let data = {
            public_project_id : id,
            public_agree_status : formdata.get('public_agree_status'),
            public_agree_text : formdata.get('public_agree_text'),
        }

        const res = await exportedAPIPublicip.createPublicip(data, user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getPublicip')
            exportedSwal.actionSuccess("บันทึกข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

    } 




    return {
        ...values,
        id,
        ref_form,
        submitForm,
        qe_publicip_data
    }
}