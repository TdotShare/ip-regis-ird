import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/ConfigureStore'

import exportedAPIVideoip from '../../utils/api/Videoip'
import exportedAPILinkip from '../../utils/api/Linkip'
import exportedAPIGalleryip from '../../utils/api/Galleryip'
import exportedAPIFileip from '../../utils/api/Fileip'

import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'
import { APILinkip_data } from '../../model/18-Workip/Linkip'
import { APIVideoip_data } from '../../model/18-Workip/Videoip'
import { APIFileip_data } from '../../model/18-Workip/Fileip'
import { APIGalleryip_data } from '../../model/18-Workip/Galleryip'
import { keyQueryPath } from '../../utils/keyquery'

export default function WorksipVM() {

    /** 
     * test pass 29-04-2022
     *  - get data
     *  - create data ( Worksip )
     *  - delete data
     *  - update data
     * test pass 02-05-2022
     *  - input data
    */


    const { id }: any = useParams();
    
    const ref_form_linkip = useRef<HTMLFormElement>(null);
    const ref_form_videoip = useRef<HTMLFormElement>(null);
    const ref_form_fileip = useRef<HTMLFormElement>(null);
    const ref_form_galleryip = useRef<HTMLFormElement>(null);

    const queryClient = useQueryClient()

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `ผลงานทรัพย์สินทางปัญญา`, url: "", active: true },
        ]
    })


    const qe_linkip_data = useQuery<APILinkip_data, Error>('getLinkip', async () => exportedAPILinkip.getLinkip(id, user.token))
    const qe_videoip_data = useQuery<APIVideoip_data, Error>('getVideoip', async () => exportedAPIVideoip.getVideoip(id, user.token))
    const qe_fileip_data = useQuery<APIFileip_data, Error>('getFileip', async () => exportedAPIFileip.getFileip(id, user.token))
    const qe_galleryip_data = useQuery<APIGalleryip_data, Error>('getGalleryip', async () => exportedAPIGalleryip.getGalleryip(id, user.token))


    const submitForm_Linkip = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(formdata.get('link_working') === ""){
            exportedSwal.actionInfo("กรุณาใส่ url !")
            return
        }

        let data = {
            link_project_id : id,
            link_working : formdata.get('link_working')
        }

        const res = await exportedAPILinkip.createLinkip(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries(keyQueryPath.getFormAttachment)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form_linkip.current?.reset()

    }

    const submitForm_Videoip = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(formdata.get('video_url') === ""){
            exportedSwal.actionInfo("กรุณาใส่ url !")
            return
        }

        let data = {
            video_project_id : id,
            video_url : formdata.get('video_url')
        }

        const res = await exportedAPIVideoip.createVideoip(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries(keyQueryPath.getFormAttachment)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form_videoip.current?.reset()


    }


    const submitForm_Fileip = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);


        if(formdata.get('fileip_detail') === ""){
            exportedSwal.actionInfo("กรุณาใส่รายละเอียดหรือชื่อไฟล์ !")
            return
        }

        let file = formdata.get('fileip_file') as File

        if (file.name === '') {
            exportedSwal.actionInfo(`กรุณาแนบไฟล์ !`)
            return
        }

        var postData = new FormData();

        postData.append("fileip_project_id", `${id}`)
        postData.append("fileip_detail", String(formdata.get('fileip_detail')))
        postData.append("fileip_file", formdata.get('fileip_file') as File)

        const res = await exportedAPIFileip.createFileip(postData , user.token)

        if(res.bypass){
            queryClient.invalidateQueries(keyQueryPath.getFormAttachment)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form_fileip.current?.reset()

    }

    const submitForm_Galleryip = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);


        if(formdata.get('gallery_detail') === ""){
            exportedSwal.actionInfo("กรุณาใส่รายละเอียดหรือชื่อภาพ !")
            return
        }

        let file = formdata.get('gallery_file') as File

        if (file.name === '') {
            exportedSwal.actionInfo(`กรุณาไฟล์รูปภาพ !`)
            return
        }

        var postData = new FormData();

        postData.append("gallery_project_id", `${id}`)
        postData.append("gallery_detail", String(formdata.get('gallery_detail')))
        postData.append("gallery_file", formdata.get('gallery_file') as File)

        const res = await exportedAPIGalleryip.createGalleryip(postData , user.token)

        if(res.bypass){
            queryClient.invalidateQueries(keyQueryPath.getFormAttachment)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form_galleryip.current?.reset()

    }

    const actionDeleteGalleryip = async (id: number) =>  {
        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIGalleryip.deleteGalleryip(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormAttachment)
                queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }

    }

    const actionDeleteFileip = async (id: number) =>  {
        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIFileip.deleteFileip(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormAttachment)
                queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }

    }

    const actionDeleteVideoip = async (id: number) =>  {
        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIVideoip.deleteVideoip(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormAttachment)
                queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }

    }

    const actionDeleteLinkip = async (id: number) =>  {
        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPILinkip.deleteLinkip(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries(keyQueryPath.getFormAttachment)
                queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }

    return {
        ...values,
        id,
        ref_form_fileip,
        ref_form_galleryip,
        ref_form_linkip,
        ref_form_videoip,
        qe_linkip_data,
        qe_videoip_data,
        qe_fileip_data,
        qe_galleryip_data,
        actionDeleteGalleryip,
        actionDeleteFileip,
        actionDeleteVideoip,
        actionDeleteLinkip,
        submitForm_Galleryip,
        submitForm_Fileip,
        submitForm_Videoip,
        submitForm_Linkip
    }
}