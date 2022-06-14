import React , { useRef, useState } from 'react'
import {  useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIBudget from '../../utils/api/Budget'
import { keyQueryPath } from '../../utils/keyquery'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function BudgetVM() {

    /** 
     * test pass 26-04-2022
     *  - get data
     *  - create data ( budget )
     * test pass 02-05-2022
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
            { name: `งบประมาณในการทำ - ระยะเวลาในการทำ`, url: "", active: true },
        ]
    })

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        let data = {
            budget_project_id : id,
            budget_price : formdata.get('budget_price'),
            budget_year : formdata.get('budget_year'),
            budget_month : formdata.get('budget_month'),
        }

        const res = await exportedAPIBudget.createBudget(data, user.token)

        if(res.bypass){
            queryClient.invalidateQueries(keyQueryPath.getFormProjects)
            queryClient.invalidateQueries(keyQueryPath.getProcessmenu)
            exportedSwal.actionSuccess("บันทึกข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

    } 

    return {
        ...values,
        id,
        ref_form,
        submitForm,
    }
}