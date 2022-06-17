import React , { useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIMovant from '../../utils/api/Movant'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function MovantVM() {

    /** 
     * test pass 26-04-2022
     *  - get data
     *  - create data ( movant )
     * test pass 02-05-2022
     *  - input data
    */

    const { id }: any = useParams();

    const queryClient = useQueryClient()
    
    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การประดิษฐ์นี้เคยนำไปยื่นขอรับ ...`, url: "", active: true },
        ]
    })

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        let data = {
            movant_project_id : id,
            movant_number : formdata.get('movant_number'),
            movant_date : formdata.get('movant_date'),
            movant_country : formdata.get('movant_country'),
        }

        //console.log(data)

        const res = await exportedAPIMovant.createMovant(data, user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getMovant')
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
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
    }
}