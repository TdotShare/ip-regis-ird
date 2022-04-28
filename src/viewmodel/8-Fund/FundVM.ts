import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIFund_data } from '../../model/8-Fund/Fund'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIFund from '../../utils/api/Fund'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function FundVM() {

    /** 
     * test pass 26-04-2022
     *  - get data
     *  - create data ( fund )
     *  - delete data
    */

    const { id }: any = useParams();
    
    const ref_form = useRef<HTMLFormElement>(null);

    const queryClient = useQueryClient()

    const user = useSelector((state: RootState) => state.user.data)

    const qe_fund_data = useQuery<APIFund_data, Error>('getFund', async () => exportedAPIFund.getFund(id, user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การประดิษฐ์นี้ได้รับทุนอุดหนุนหรืออยู่ภายใต้ข้อตกลง ...`, url: "", active: true },
        ]
    })


    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(!formdata.get('fund_title') || formdata.get('fund_detail') === ''){
            exportedSwal.actionInfo(`กรุณากรอกข้อมูลให้ครบ !`)
            return
        }

        let file = formdata.get('fund_file') as File
        
        if(file.name === ''){
            exportedSwal.actionInfo(`กรุณาแนบไฟล์ !`)
            return
        }

        var postData = new FormData();

        postData.append("fund_project_id", `${id}`)
        postData.append("fund_title", `${formdata.get('fund_title')}`)
        postData.append("fund_detail", `${formdata.get('fund_detail')}`)
        postData.append("fund_file", formdata.get('fund_file') as File )

        // console.log(data)

        const res = await exportedAPIFund.createFund(postData, user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getFund')
            exportedSwal.actionSuccess("บันทึกข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }
    } 

    const actionDelete = async (id : number) => {
        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIFund.deleteFund(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getFund')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }


    return {
        ...values,
        id,
        ref_form,
        submitForm,
        qe_fund_data,
        actionDelete
    }
}