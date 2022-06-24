import React from 'react'
import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { APIProject_data } from '../../model/2-Project/Project'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIProject from '../../utils/api/Project'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function RegisVM() {

    /** 
     * test pass 20-04-2022
     *  - get data
     * 
    */


    const queryClient = useQueryClient()

    const user = useSelector((state: RootState) => state.user.data)

    const [page, setPage] = React.useState(0)

    const [values] = useState({
        title: "ขอยื่นจดทะเบียน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: "", active: true },
        ]
    })


    const dispatch = useDispatch()

    const qe_project_data = useQuery<APIProject_data, Error>([ 'getProjectAll' , page ], async () => exportedAPIProject.getProjectAll(page , user.token))

    const actionDelete = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("โครงการที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIProject.deleteProject(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getProjectAll')
            } else {
                exportedSwal.actionInfo(res.message)
            }
        }
    }

    return {
        ...values,
        queryClient,
        qe_project_data,
        exportedSwal,
        actionDelete,
        setPage,
        dispatch,
        user,
    }
}