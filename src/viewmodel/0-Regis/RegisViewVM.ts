import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { APIStatusIP_data } from '../../model/2-Project/Status'
import { APIRegisProject_data } from '../../model/RegisProject'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIProject from '../../utils/api/Project'
import exportedAPIRegis from '../../utils/api/Regis'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function RegisViewVM() {


    const { id }: any = useParams();


    const user = useSelector((state: RootState) => state.user.data)

    const queryClient = useQueryClient()

    const navigate = useNavigate();

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: "", active: true },
            { name: `${id}`, url: "", active: true },
        ]
    })

    const query_project_data  = useQuery<APIRegisProject_data, Error>('getProject', async () => exportedAPIProject.getProject(id , user.token) , { keepPreviousData: false })
    const query_statusip_data  = useQuery<APIStatusIP_data, Error>('getStatusip', async () => exportedAPIProject.getStatus_ip(user.token))

    const submitFormSendProject = async (event: React.FormEvent<HTMLFormElement>)  => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(!formdata.get('project_tel') || !formdata.get('project_email')){
            exportedSwal.actionInfo(`กรุณากรอกข้อมูล เบอร์โทร และ email ก่อนกดส่งคำขอ !`)
            return
        }


        let data = {
            project_id : id,
            project_tel : formdata.get('project_tel'),
            project_email : formdata.get('project_email'),
            project_status : 2,
        }

        const res = await exportedAPIProject.updateSendProject(data , user.token)

        if(res.bypass){
            exportedSwal.actionSuccess("ส่งคำขอให้เจ้าหน้าที่เรียบร้อย !")
            navigate(routerPathUser.Regis)
            
        }else{
            exportedSwal.actionInfo(res.message)
        }


    }

    const submitFormNumberRegi = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(!formdata.get('project_regis_num')){
            exportedSwal.actionInfo(`กรุณากรอกเลขคำขอ !`)
            return
        }

        let data = {
            project_id : id,
            project_regis_num : formdata.get('project_regis_num'),
        }

        const res = await exportedAPIRegis.updateNumberRegis(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getProject')
            exportedSwal.actionSuccess("บันทึกเลขคำขอเรียบร้อย !")
        }else{
            exportedSwal.actionInfo(res.message)
        }

    } 

    const submitFormStatusRegi = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(!formdata.get('status_id')){
            exportedSwal.actionInfo(`กรุณาเลือกสถานะติดตาม !`)
            return
        }

        let data = {
            project_id : id,
            project_status : formdata.get('status_id'),
        }

        const res = await exportedAPIRegis.updateStatus(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getProject')
            exportedSwal.actionSuccess("เปลี่ยนสถานะเรียบร้อย !")
        }else{
            exportedSwal.actionInfo(res.message)
        }

    } 

    return {
        ...values,
        id,
        user,
        submitFormStatusRegi,
        submitFormNumberRegi,
        submitFormSendProject,
        query_statusip_data,
        query_project_data,
        queryClient,
        exportedSwal
    }
}