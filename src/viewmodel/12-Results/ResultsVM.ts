import React, { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIResults_data } from '../../model/12-Results/Results'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIResults from '../../utils/api/Results'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function ResultsVM() {

    /** 
     * test pass 27-04-2022
     *  - get data
     *  - create data ( Results )
     *  - delete data
    */


    const { id }: any = useParams();


    const queryClient = useQueryClient()

    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const qe_results_data = useQuery<APIResults_data, Error>('getResults', async () => exportedAPIResults.getResults(id, user.token))

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

    const actionDelete = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIResults.deleteResults(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getResults')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }

    }

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);


        var postData = new FormData();
        postData.append("results_project_id", `${id}`)

        if (formdata.get('results_head') === "") {
            exportedSwal.actionInfo(`กรุณาเลือกการทดลอง !`)
            return
        }

        if(Number(formdata.get('results_head')) === 0){
            postData.append("results_head", 'มีในระดับห้องทดลอง' )
        }

        if (formdata.get('results_text') === "" && formdata.get('results_head') !== "") {
            exportedSwal.actionInfo(`กรุณาเลือกการดำเนินการ  !`)
            return
        }


        if (showOptionDetail === 1) { //เลือกแบบมีไฟล์
            let file = formdata.get('results_file') as File

            if (file.name === '') {
                exportedSwal.actionInfo(`กรุณาแนบไฟล์ !`)
                return
            }


            postData.append("results_head", Number(formdata.get('results_head')) === 1 ? 'มีในสัตว์ทดลอง' : 'มีในมนุษย์')
            postData.append("results_text", Number(formdata.get('results_head')) === 1 ? 'มีการดำเนินการขอรับการพิจารณาจรรยาบรรณการใช้สัตว์ทดลอง' : 'การดำเนินการขอรับการพิจารณาจากคณะกรรมการจริยธรรมการวิจัยในมนุษย์')
            postData.append("results_file", formdata.get('results_file') as File )
        }


        if (showOptionDetail === 2) { //ไม่มีไฟล์
            if (formdata.get('results_detail') === "") {
                exportedSwal.actionInfo(`กรุณากรอก ไม่ได้ดำเนินการขอรับการพิจารณาฯ เนื่องจาก !`)
                return
            }

            postData.append("results_head", Number(formdata.get('results_head')) === 1 ? 'มีในสัตว์ทดลอง' : 'มีในมนุษย์')
            postData.append("results_text", 'ไม่ได้ดำเนินการขอรับการพิจารณาฯ')
            postData.append("results_detail", String(formdata.get('results_detail')) )
        }


        const res = await exportedAPIResults.createResults(postData, user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getResults')
            exportedSwal.actionSuccess("บันทึกข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }


        setOptionText(0)
        setOptionDetail(0)

        ref_form.current?.reset()





    }

    return {
        ...values,
        id,
        ref_form,
        submitForm,
        actionShowOption,
        actionShowDetail,
        actionDelete,
        showOptionText,
        showOptionDetail,
        qe_results_data,

    }
}