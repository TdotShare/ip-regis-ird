import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIBiological_data } from '../../model/11-Bioseso/Biological'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIBioreso from '../../utils/api/Bioreso'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function BioresoVM() {


    const { id }: any = useParams();
    
    const ref_form = useRef<HTMLFormElement>(null);

    const user = useSelector((state: RootState) => state.user.data)

    const qe_biological_data = useQuery<APIBiological_data, Error>('getBiological', async () => exportedAPIBioreso.getBiological(id))

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `การประดิษฐ์นี้มีการใช้ทรัพยากรชีวภาพ`, url: "", active: true },
        ]
    })

    const [showOptionText , setOptionText ] = useState(0)

    const actionShowOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const item = qe_biological_data.data?.data.filter((el) => el.bio_id === Number(e.target.value))
        setOptionText(Number(item![0].bio_option))
    }

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        let data = {
            fund_project_id : id,
            fund_title : formdata.get('fund_title'),
            fund_detail : formdata.get('fund_detail'),
            fund_file : formdata.get('fund_file'),
        }

        console.log(data)

    } 

    return {
        ...values,
        id,
        ref_form,
        qe_biological_data,
        submitForm,
        actionShowOption,
        showOptionText
    }
}