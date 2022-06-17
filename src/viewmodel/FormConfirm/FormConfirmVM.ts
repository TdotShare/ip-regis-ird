import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIProject from '../../utils/api/Project'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function FormConfirmVM() {

   
    const { id }: any = useParams();

    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `ส่งคำขอให้เจ้าหน้าที่`, url: "", active: true },
        ]
    })

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

    return {
        ...values,
        id,
        user,
        submitFormSendProject
    }
}