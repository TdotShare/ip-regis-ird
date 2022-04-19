import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { APICategoryIP_data } from '../../model/2-Project/Category'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIProject from '../../utils/api/Project'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function RegisCreateVM() {


    /** 
     * test pass 19-04-2022
     *  - create data
     * 
    */

    const user = useSelector((state: RootState) => state.user.data)

    const navigate = useNavigate();

    const query_categoryip_data  = useQuery<APICategoryIP_data, Error>('getCategory_ip', async () => exportedAPIProject.getCategory_ip(user.token))

    const [values, setValues] = useState({
        title: "ขอยื่นจดทะเบียน - สร้าง",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: "สร้าง", url: "", active: true },
        ],
        ip_name_th: "",
        ip_name_en: "",
        ip_category_id: 0,
        ip_category_sub: "",
        ip_category_option: 0,

    })


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const actionSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const item = query_categoryip_data.data?.data.filter((el) => el.category_ip_id === Number(e.target.value))
        setValues({ ...values, ip_category_id: Number(e.target.value), ip_category_option: Number(item![0].category_ip_option) })

    }

    const actionCreate = async () => {

        if (values.ip_name_th === "" || values.ip_name_en === "") {
            exportedSwal.actionInfo("โปรดกรอกข้อมูล ชื่อที่แสดงถึงการประดิษฐ์ ให้ครบ !")
            return
        }

        console.log(`ip_category_id = ${values.ip_category_id}`)
        if (values.ip_category_id === 0) {
            exportedSwal.actionInfo("โปรดเลือก ประเภทของทรัพย์สินทางปัญญา !")
            return
        }
        if (values.ip_category_option === 1) {
            if (values.ip_category_sub === "") {
                exportedSwal.actionInfo("โปรดกรอกช่อง โปรดระบุเพิ่มเติม !")
                return
            }
        }else{
            values.ip_category_sub = ""
        }

        let data = {
            project_name_th: values.ip_name_th,
            project_name_en: values.ip_name_en,
            project_category_ip_id: values.ip_category_id,
            project_category_ip_sub: values.ip_category_sub,
        }


        const res = await exportedAPIProject.createProject(data , user.token)

        if(res.bypass){

            exportedSwal.actionSuccess("สร้างข้อมูลเรียบร้อย !")

            navigate(routerPathUser.Regis)
        }else{
            exportedSwal.actionInfo("สร้างข้อมูลไม่สำเร็จ")
        }
    }


    return {
        ...values,
        query_categoryip_data,
        actionCreate,
        onChange,
        actionSelectChange
    }
}