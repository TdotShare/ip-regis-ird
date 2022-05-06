import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { APIProject_data } from "../../../model/2-Project/Project";
import { RootState } from "../../../store/ConfigureStore";
import exportedAPIRegis from "../../../utils/api/Regis";
import { routerPathUser } from "../../../utils/routerpath";

export default function ProjectAdminVM() {


    const user = useSelector((state: RootState) => state.user.data)

    const [page, setPage] = React.useState(0)

    const qe_project_data = useQuery<APIProject_data, Error>([ 'getProjectAdminAll' , page ], async () => exportedAPIRegis.getProjectAll(page , user.token))

    const [values] = useState({
        title: "รายการผู้ยื่นจดทะเบียน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "รายการผู้ยื่นจดทะเบียน", url: "", active: true },
        ]
    })


    return {
        ...values,
        qe_project_data,
        setPage,
        user
    }
}