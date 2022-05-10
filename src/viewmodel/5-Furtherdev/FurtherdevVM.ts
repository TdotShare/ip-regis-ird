import React, { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIFurtherdev_data } from '../../model/5-Furtherdev/Furtherdev'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIFurtherdev from '../../utils/api/Furtherdev'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function FurtherdevVM() {

    /** 
     * test pass 22-04-2022
     *  - get data
     *  - create data ( Furtherdev )
     *  - delete data
     * test pass 02-05-2022
     *  - input data
    */

    const { id }: any = useParams();

    const queryClient = useQueryClient()

    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const qe_furtherdev_data = useQuery<APIFurtherdev_data, Error>('getFurtherdev', async () => exportedAPIFurtherdev.getFurtherdev(id, user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การประดิษฐ์นี้มีการพัฒนาต่อยอด`, url: "", active: true },
        ]
    })

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if (!formdata.get('furtherdev_title') || !formdata.get('furtherdev_text')) {
            exportedSwal.actionInfo('กรุณากรอกข้อมูลให้ครบ !')
            return
        }

        let data = {
            'furtherdev_project_id' : id ,
            'furtherdev_title' : formdata.get('furtherdev_title') ,
            'furtherdev_text' : formdata.get('furtherdev_text') ,
        }

        const res = await exportedAPIFurtherdev.createFurtherdev(data, user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getFurtherdev')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form.current?.reset()

    }

    const actionDelete = async (id: number) => {
        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIFurtherdev.deleteFurtherdev(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getFurtherdev')
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
        actionDelete,
        qe_furtherdev_data,
        exportedSwal
    }
}