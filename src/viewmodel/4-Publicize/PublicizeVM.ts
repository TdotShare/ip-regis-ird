import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIExpose_data } from '../../model/4-Publicize/Expose'
import { APIPresent_data } from '../../model/4-Publicize/Present'
import { APIPublish_data } from '../../model/4-Publicize/Publish'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIPublicize from '../../utils/api/Publicize'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function PublicizeVM() {

    /** 
     * test pass 21-04-2022
     *  - get data
     *  - create data ( Publicize )
     *  - save file , delete file
    */

    const queryClient = useQueryClient()

    const { id }: any = useParams();
    
    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const qe_present_data = useQuery<APIPresent_data, Error>('getPresent', async () => exportedAPIPublicize.getPresent(id, user.token))
    const qe_expose_data = useQuery<APIExpose_data, Error>('getExpose', async () => exportedAPIPublicize.getExpose(id, user.token))
    const qe_publish_data = useQuery<APIPublish_data, Error>('getPublish', async () => exportedAPIPublicize.getPublish(id, user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `นำเสนอ - การเปิดเผย - การเผยแพร่`, url: "", active: true },
        ]
    })

    const submitForm_Present = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if (!formdata.get('present_text')) {
            exportedSwal.actionInfo('กรุณาเลือกข้อมูล')
            return
        }

        let data = {
            'present_project_id': id,
            'present_text': formdata.get('present_text')
        }

        let resData = await exportedAPIPublicize.createPresent(data, user.token)

        if (resData.bypass) {
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")
            queryClient.invalidateQueries('getPresent')
        } else {
            exportedSwal.actionInfo(resData.message)
        }
    }


    const actionDelete_Present = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIPublicize.deletePresent(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getPresent')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }

    const submitForm_Expose = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(!formdata.get('expose_date') || !formdata.get('expose_agency') || !formdata.get('expose_location') 
        || !formdata.get('expose_country') || !formdata.get('expose_file')  ){

            exportedSwal.actionInfo("กรุณากรอกข้อมูลให้ครบ !")
            return
        }

        var postData = new FormData();

        postData.append("expose_project_id", `${id}`)
        postData.append("expose_date", `${formdata.get('expose_date')}`)
        postData.append("expose_agency", `${formdata.get('expose_agency')}`)
        postData.append("expose_location", `${formdata.get('expose_location')}`)
        postData.append("expose_country", `${formdata.get('expose_country')}`)
        postData.append("expose_file", formdata.get('expose_file') as File)


        
        let resData = await exportedAPIPublicize.createExpose(postData, user.token)

        console.log(resData.data)

        if(resData.bypass){
            queryClient.invalidateQueries('getExpose')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")
           

        }else{
            exportedSwal.actionInfo(resData.message)
        }

        ref_form.current?.reset()


    }

    const actionDelete_Expose = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIPublicize.deleteExpose(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getExpose')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }

    const submitForm_Publish = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(!formdata.get('publish_head') || !formdata.get('publish_text') || !formdata.get('publish_file')   ){

            exportedSwal.actionInfo("กรุณากรอกข้อมูลให้ครบ !")
            return
        }
        
        var postData = new FormData();

        postData.append("publish_project_id", `${id}`)
        postData.append("publish_file", formdata.get('publish_file') as File )
        postData.append("publish_text", `${formdata.get('publish_text')}`)
        postData.append("publish_head", `${formdata.get('publish_head')}`)

        let resData = await exportedAPIPublicize.createPublish(postData, user.token)

        console.log(resData.data)

        if(resData.bypass){
            queryClient.invalidateQueries('getPublish')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")
        }else{
            exportedSwal.actionInfo(resData.message)
        }

        ref_form.current?.reset()

    }

    const actionDelete_Publish = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIPublicize.deletePublish(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getPublish')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }


    return {
        ...values,
        id,
        ref_form,
        qe_present_data,
        qe_expose_data,
        qe_publish_data,
        submitForm_Present,
        submitForm_Expose,
        submitForm_Publish,
        actionDelete_Present,
        actionDelete_Expose,
        actionDelete_Publish
    }
}