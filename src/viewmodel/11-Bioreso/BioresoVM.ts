import React, { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIBiological_data } from '../../model/11-Bioseso/Biological'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIBioreso from '../../utils/api/Bioreso'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function BioresoVM() {

    /* 
        test pass 02-05-2022
        - input data
    */


    const { id }: any = useParams();

    const ref_form = useRef<HTMLFormElement>(null);

    const queryClient = useQueryClient()

    const user = useSelector((state: RootState) => state.user.data)

    const qe_biological_data = useQuery<APIBiological_data, Error>('getBiological', async () => exportedAPIBioreso.getBiological(user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การประดิษฐ์นี้มีการใช้ทรัพยากรชีวภาพ`, url: "", active: true },
        ]
    })

    const [showOptionText, setOptionText] = useState(0)

    const actionShowOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (Number(e.target.value) === 0) {
            setOptionText(0)
            return
        }
        const item = qe_biological_data.data?.data.filter((el) => el.bio_id === Number(e.target.value))
        setOptionText(Number(item![0].bio_option))
    }

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);



        if (Number(formdata.get('bioreso_bio_id')) === 0) {
            exportedSwal.actionInfo(`กรุณาเลือกทรัพยากรชีวภาพ !`)
            return
        }

        if (Number(formdata.get('bioreso_bio_id')) === 7) {
            if (!formdata.get('bioreso_other_name')) {
                exportedSwal.actionInfo(`กรุณาระบบชื่อ !`)
                return
            }
        }

        if (formdata.get('bioreso_detail') === "") {
            exportedSwal.actionInfo(`โปรดระบุแหล่งที่มา !`)
            return
        }

        let file = formdata.get('bioreso_file') as File

        if (file.name === '') {
            exportedSwal.actionInfo(`กรุณาแนบไฟล์ !`)
            return
        }



        var postData = new FormData();

        postData.append("bioreso_project_id", `${id}`)
        postData.append("bioreso_bio_id", `${formdata.get('bioreso_bio_id')}`)
        postData.append("bioreso_other_name", `${formdata.get('bioreso_other_name')}`)
        postData.append("bioreso_detail", `${formdata.get('bioreso_detail')}`)
        postData.append("bioreso_file", formdata.get('bioreso_file') as File)


        const res = await exportedAPIBioreso.createBioreso(postData, user.token)

        if (res.bypass) {
            queryClient.invalidateQueries(keyQueryPath.getFormProjects)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            exportedSwal.actionSuccess("บันทึกข้อมูลเรียบร้อย !")

        } else {
            exportedSwal.actionInfo(res.message)
        }

        ref_form.current?.reset()

    }

    const actionDelete = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIBioreso.deleteBioreso(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormProjects)
                queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }

    }

    return {
        ...values,
        id,
        ref_form,
        qe_biological_data,
        submitForm,
        actionShowOption,
        showOptionText,
        actionDelete
    }
}