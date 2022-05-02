import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/ConfigureStore'
import exportedAPICharges from '../../utils/api/Charges'
import exportedAPIEstimate from '../../utils/api/Estimate'
import exportedAPIFileExpand from '../../utils/api/FileExpand'
import exportedAPIExpand from '../../utils/api/Expand'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'
import { APICharges_data } from '../../model/17-Assessment/Charges'
import { APIEstimate_data } from '../../model/17-Assessment/Estimate'
import { APIExpand_data } from '../../model/17-Assessment/Expand'
import { APIFileExpand_data } from '../../model/17-Assessment/FileExpand'

export default function AssessmentVM() {


    /** 
     * test pass 28-04-2022
     *  - get data
     *  - create data ( Assessment )
     *  - delete data
     *  - update data
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
            { name: `การประเมินศักยภาพผลงานเพื่อสู่เชิงพาณิชย์`, url: "", active: true },
        ]
    })

    const qe_charges_data = useQuery<APICharges_data, Error>('getCharges', async () => exportedAPICharges.getCharges(id, user.token))
    const qe_estimate_data = useQuery<APIEstimate_data, Error>('getEstimate', async () => exportedAPIEstimate.getEstimate(id, user.token))
    const qe_expand_data = useQuery<APIExpand_data, Error>('getExpand', async () => exportedAPIExpand.getExpand(id, user.token))
    const qe_file_expand_data = useQuery<APIFileExpand_data, Error>('getFileExpand', async () => exportedAPIFileExpand.getFileExpand(id, user.token))

    const [showOptionText , setOptionText ] = useState(0)

    const actionShowOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOptionText(Number(e.target.value))
    }

    const submitForm_expand = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        
        let data = {
            expand_project_id : id,
            expand_number_title : formdata.get('expand_number_title'),
            expand_note : formdata.get('expand_note'),
        }

        const res = await exportedAPIExpand.createExpand(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getExpand')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form.current?.reset()

    } 

    const submitForm_uploadfile_expand = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(formdata.get('file_expand_name') === ""){
            exportedSwal.actionInfo(`กรุณากรอกชื่อเอกสาร !`)
            return
        }

        let file = formdata.get('file_expand_file') as File

        if (file.name === '') {
            exportedSwal.actionInfo(`กรุณาแนบไฟล์ !`)
            return
        }

        var postData = new FormData();

        postData.append("file_expand_project_id", `${id}`)
        postData.append("file_expand_name", String(formdata.get('file_expand_name')))
        postData.append("file_expand_file", formdata.get('file_expand_file') as File)
        

        const res = await exportedAPIFileExpand.createFileExpand(postData , user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getFileExpand')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form.current?.reset()

    } 

    const submitForm_estimate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);


        if(formdata.get('estimate_price') === "" || formdata.get('estimate_timeline') === "" || formdata.get('estimate_product') === "" || formdata.get('estimate_sell') === ""){
            exportedSwal.actionInfo(`กรุณากรอกข้อมูลให้ครบ !`)
            return
        }

        let data = {
            estimate_project_id : id,
            estimate_price : formdata.get('estimate_price'),
            estimate_timeline : formdata.get('estimate_timeline'),
            estimate_product : formdata.get('estimate_product'),
            estimate_sell : formdata.get('estimate_sell'),
        }

        const res = await exportedAPIEstimate.createEstimate(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getEstimate')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

    }

    const submitForm_charges = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);


        let data = {
            charges_project_id : id,
            charges_newproduct : formdata.get('charges_newproduct'),
            charges_substitute : formdata.get('charges_substitute'),
            charges_reduction : formdata.get('charges_reduction'),
            charges_market_in : formdata.get('charges_market_in'),
            charges_market_out : formdata.get('charges_market_out'),
        }

        const res = await exportedAPICharges.createCharges(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getCharges')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

    }

    const actionDelete_expand = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIExpand.deleteExpand(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getExpand')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }

    }

    const actionDelete_file_expand = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIFileExpand.deleteFileExpand(id, user.token)

            console.log(res)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getFileExpand')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }

    }

    return {
        ...values,
        id,
        ref_form,
        showOptionText,
        qe_charges_data,
        qe_estimate_data,
        qe_expand_data,
        qe_file_expand_data,
        actionShowOption,
        submitForm_expand,
        submitForm_uploadfile_expand,
        submitForm_estimate,
        submitForm_charges,
        actionDelete_expand,
        actionDelete_file_expand
    }
}