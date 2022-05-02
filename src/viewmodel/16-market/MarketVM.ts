import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIMarket_data } from '../../model/16-Market/Market'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIMarket from '../../utils/api/Market'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function MarketVM() {

    /** 
     * test pass 27-04-2022
     *  - get data
     *  - create data ( Market )
     * test pass 02-05-2022
     *  - test data
    */


    const { id }: any = useParams();

    const queryClient = useQueryClient()
    
    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const qe_market_data = useQuery<APIMarket_data, Error>('getMarket', async () => exportedAPIMarket.getMarket(id, user.token))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การตลาด - ธุรกิจ - อุตสาหกรรม`, url: "", active: true },
        ]
    })

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if(formdata.get('market_company_name') === "" || formdata.get('market_coordinator') === "" || formdata.get('market_tel') === ""){
            exportedSwal.actionInfo(`กรุณากรอกข้อมูลให้ครบ !`)
            return
        }

        let data = {
            market_project_id : id,
            market_company_name : formdata.get('market_company_name'),
            market_coordinator : formdata.get('market_coordinator'),
            market_tel : formdata.get('market_tel'),
        }

        const res = await exportedAPIMarket.createMarket(data, user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getMarket')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form.current?.reset()
    } 

    const actionDelete = async (id: number) => {
        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIMarket.deleteMarket(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getMarket')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }

    return {
        ...values,
        id,
        ref_form,
        qe_market_data,
        submitForm,
        actionDelete
    }
}