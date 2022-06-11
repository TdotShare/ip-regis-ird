import React , { useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIPublicize from '../../utils/api/Publicize'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'



export default function PublicizeVM() {

    /** 
     * test pass 21-04-2022
     *  - get data
     *  - create data ( Publicize )
     *  - save file , delete file
     * test pass 02-05-2022
     *  - input data
    */

    const queryClient = useQueryClient()

    const { id }: any = useParams();
    
    const ref_form_present = useRef<HTMLFormElement>(null);
    const ref_form_expose = useRef<HTMLFormElement>(null);
    const ref_form_publish = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)
    
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
            queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
        } else {
            exportedSwal.actionInfo(resData.message)
        }

        ref_form_present.current?.reset()
    }


    const actionDelete_Present = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIPublicize.deletePresent(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
                queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
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

        //console.log(resData.data)

        if(resData.bypass){
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")
            queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
        }else{
            exportedSwal.actionInfo(resData.message)
        }

        ref_form_expose.current?.reset()


    }

    const actionDelete_Expose = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIPublicize.deleteExpose(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
                queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }

    const submitForm_Publish = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(!formdata.get('publish_head') || !formdata.get('publish_text')   ){

            exportedSwal.actionInfo("กรุณากรอกข้อมูลให้ครบ !")
            return
        }

        let file_data = formdata.get('publish_file') as File

        if (!file_data.name) {
            exportedSwal.actionInfo("กรุณาแนบไฟล์ !")
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
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")
            queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
        }else{
            exportedSwal.actionInfo(resData.message)
        }

        ref_form_publish.current?.reset()

    }

    const actionDelete_Publish = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIPublicize.deletePublish(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormPublishing)
                queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }


    return {
        ...values,
        id,
        ref_form_present,
        ref_form_expose,
        ref_form_publish,
        exportedSwal,
        submitForm_Present,
        submitForm_Expose,
        submitForm_Publish,
        actionDelete_Present,
        actionDelete_Expose,
        actionDelete_Publish,
    }
}