import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPIPeople from '../../utils/api/People'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function PeopleVM() {

    
    /** 
     * test pass 20-04-2022
     *  - get data
     *  - create data ( People )
     *  - save file , delete file
    */

    const queryClient = useQueryClient()
    
    const { id }: any = useParams();

    const qe_people_data = useQuery<APIPeople_data, Error>('getPeople', async () => exportedAPIPeople.getProple(id , user.token))


    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis , active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `รายชื่อผู้ประดิษฐ์ - ผู้สร้างสรรค์`, url: "", active: true },
        ]
    })

    const [file_data, setFile] = useState<File | undefined>()
    const [select_data, setSelect] = useState<String>("")
    const [head_data, setHead] = useState<String>("")

    const actionSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }

    const actionHeadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setHead(e.target.value)
    }


    const InputUploadFile_not_head = (e: React.ChangeEvent<HTMLInputElement>) => {

    
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        if(typeof(file) === 'undefined')return

        if(file.type === "image/png" || file.type === "image/jpeg"){
            setFile(file)
        }else{
            exportedSwal.actionInfo("กรุณาแนบไฟล์รูปภาพ เฉพาะนามสกุล png , jpage  ")
        }
    }

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

        const formdata = new FormData(event.currentTarget);

        var postData = new FormData();


        if(head_data === "" || select_data === "" || !formdata.get('people_firstname') || !formdata.get('people_lastname') || !formdata.get('people_address') ||
        !formdata.get('people_tel') || !formdata.get('people_email') || !formdata.get('people_process')){
            exportedSwal.actionInfo("กรอกข้อมูลให้ครบ !")
            return
        }

        if(file_data === undefined){
            exportedSwal.actionInfo("กรุณาแนบไฟล์รูปภาพ")
            return
        }
    
        postData.append("people_project_id", `${id}`)
        postData.append("people_firstname", `${formdata.get('people_firstname')}`)
        postData.append("people_lastname", `${formdata.get('people_lastname')}`)
        postData.append("people_address", `${formdata.get('people_address')}`)
        postData.append("people_tel", `${formdata.get('people_tel')}`)
        postData.append("people_email", `${formdata.get('people_email')}`)
        postData.append("people_process", `${formdata.get('people_process')}`)
        postData.append("people_image_file", file_data!)
        postData.append("people_type", `${select_data}`)
        postData.append('people_head' , `${head_data}`)


        let resData = await exportedAPIPeople.createPeople(postData, user.token)


        if(resData.bypass){
            queryClient.invalidateQueries('getPeople')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(resData.message)
        }

      }


    const actionDelete = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("คุณต้องการลบข้อมูลใช่หรือไม่")

        if (confirmDelete) {
            const res = await exportedAPIPeople.deletePeople(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลเรียบร้อย !")
                queryClient.invalidateQueries('getPeople')
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }

    return {
        ...values,
        id,
        qe_people_data,
        submitForm,
        actionDelete,
        file_data,
        InputUploadFile_not_head,
        setSelect,
        actionSelectChange,
        actionHeadChange
    }
}