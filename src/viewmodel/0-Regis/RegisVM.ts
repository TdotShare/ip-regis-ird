import React , {useState} from 'react'
import { routerPathUser } from '../../utils/routerpath'

export default function RegisVM() {

    const [values, setValues] = useState({
        title: "ขอยื่นจดทะเบียน",
        breadcrumb : [
            { name: "หน้าหลัก", url: routerPathUser.Regis , active: false },
            { name: "ขอยื่นจดทะเบียน", url: "", active: true },
        ]
    })




    return {
        ...values
    }
}