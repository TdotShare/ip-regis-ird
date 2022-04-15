import React, { useState } from 'react'
import CategoryIpData from '../../data/CategoryIpData'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function RegisCreateVM() {

    const [values, setValues] = useState({
        title: "ขอยื่นจดทะเบียน - สร้าง",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: "สร้าง", url: "", active: true },
        ],
        ip_name_th: "",
        ip_name_en: "",
        ip_category_data: CategoryIpData,
        ip_category_id: 0,
        ip_category_sub: "",
        ip_category_option: false,

    })


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const actionSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const item = values.ip_category_data.filter((el) => el.category_ip_id === Number(e.target.value))
        setValues({ ...values, ip_category_id: Number(e.target.value), ip_category_option: item[0].category_ip_option })

    }

    const actionCreate = () => {

        if (values.ip_name_th === "" || values.ip_name_en === "") {
            exportedSwal.actionInfo("โปรดกรอกข้อมูล ชื่อที่แสดงถึงการประดิษฐ์ ให้ครบ !")
            return
        }

        console.log(`ip_category_id = ${values.ip_category_id}`)
        if (values.ip_category_id === 0) {
            exportedSwal.actionInfo("โปรดเลือก ประเภทของทรัพย์สินทางปัญญา !")
            return
        }
        if (values.ip_category_option) {
            if (values.ip_category_sub === "") {
                exportedSwal.actionInfo("โปรดกรอกช่อง โปรดระบุเพิ่มเติม !")
                return
            }
        }

        let data = {
            ip_name_th: values.ip_name_th,
            ip_name_en: values.ip_name_en,
            ip_category_id: values.ip_category_id,
            ip_category_sub: values.ip_category_sub,
        }

        console.log(data)

        exportedSwal.actionSuccess("สร้างข้อมูลเรียบร้อย !")
    }


    return {
        ...values,
        actionCreate,
        onChange,
        actionSelectChange
    }
}