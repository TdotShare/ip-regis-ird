import React, { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function ResultsVM() {


    const { id }: any = useParams();

    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `ผลการวิจัย หรือผลการทดสอบ`, url: "", active: true },
        ]
    })

    const [showOptionDetail, setOptionDetail] = useState(0)
    const [showOptionText, setOptionText] = useState(0)

    const actionShowOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOptionText(Number(e.target.value))
        setOptionDetail(0)

    }

    const actionShowDetail = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOptionDetail(Number(e.target.value))

    }

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        let results_head = ""
        let results_text = ""

        if (formdata.get('results_head') === "") {
            exportedSwal.actionInfo(`กรุณาเลือกการทดลอง !`)
            return
        }

        if (formdata.get('results_head') !== "") {

            if (formdata.get('results_text') === "") {
                exportedSwal.actionInfo(`กรุณาเลือกการดำเนินการ  !`)
                return
            }


            if (Number(formdata.get('results_text')) === 1) {

                let file = formdata.get('results_file') as File

                if (file.name === '') {
                    exportedSwal.actionInfo(`กรุณาแนบไฟล์ !`)
                    return
                }
            }


            if (Number(formdata.get('results_text')) === 2) {
                if (formdata.get('results_detail') === "") {
                    exportedSwal.actionInfo(`กรุณากรอก ไม่ได้ดำเนินการขอรับการพิจารณาฯ เนื่องจาก  !`)
                    return
                }
            }
        }

        if (Number(formdata.get('results_head')) === 0) {
            results_head = `มีในระดับห้องทดลอง`
        } else if (Number(formdata.get('results_head')) === 1) {
            results_head = `มีในสัตว์ทดลอง`
        } else {
            results_head = `มีในมนุษย์`
        }


        if (Number(formdata.get('results_text')) === 1) {

            if (Number(formdata.get('results_head')) === 1) {
                results_text = `มีการดำเนินการขอรับการพิจารณาจรรยาบรรณการใช้สัตว์ทดลอง`
            }
        } else if (Number(formdata.get('results_text')) === 2) {
            if (Number(formdata.get('results_head')) === 1) {
                results_text = `การดำเนินการขอรับการพิจารณาจากคณะกรรมการจริยธรรมการวิจัยในมนุษย์`
            }
        } else {
            results_text = "ไม่ได้ดำเนินการขอรับการพิจารณาฯ"
        }


        let data = {
            results_project_id: id,
            results_head: results_head,
            results_text: results_text,
            results_detail: formdata.get('results_detail'),
            results_file: formdata.get('results_file') as File,
        }

        console.log(data)



    }

    return {
        ...values,
        id,
        ref_form,
        submitForm,
        actionShowOption,
        actionShowDetail,
        showOptionText,
        showOptionDetail
    }
}