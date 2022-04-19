import React , {useState} from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { APIProject_data } from '../../model/2-Project/Project'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIProject from '../../utils/api/Project'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function RegisVM() {


    const user = useSelector((state: RootState) => state.user.data)

    const navigate = useNavigate();

    const [values, setValues] = useState({
        title: "ขอยื่นจดทะเบียน",
        breadcrumb : [
            { name: "หน้าหลัก", url: routerPathUser.Regis , active: false },
            { name: "ขอยื่นจดทะเบียน", url: "", active: true },
        ]
    })

    const qe_project_data  = useQuery<APIProject_data, Error>('getProjectAll', async () => exportedAPIProject.getProjectAll(user.token))


    const actionDelete = async (id : number) => {

        let confirmDelete = await exportedSwal.confirmDelete("คุณต้องการลบข้อมูลใช่หรือไม่")

        if(confirmDelete){
            alert(`คุณ`)
        }else{
            alert(`ไม่ลบ`)
        }

        // const res = await exportedAPIProject.deleteProject(id , user.token)

        // if(res.bypass){

           

        // }else{

        // }

    }

    return {
        ...values,
        qe_project_data,
        actionDelete
    }
}