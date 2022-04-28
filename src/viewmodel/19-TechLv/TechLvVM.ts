import React , { useRef, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APISrlTech_data } from '../../model/18-TechLv/Techsrl'
import { APITrlTech_data } from '../../model/18-TechLv/Techtrl'
//import { APIPeople_data } from '../../model/3-People/People'
import { RootState } from '../../store/ConfigureStore'
import exportedAPITechLv from '../../utils/api/TechLv'
import { routerPathUser } from '../../utils/routerpath'
import exportedSwal from '../../utils/swal'

export default function TechLvVM() {


    const { id }: any = useParams();
    
    const ref_form = useRef<HTMLFormElement>(null);

    const queryClient = useQueryClient()

    const [data_trl] = useState([
        {number : 1 , code : `tech_trl1` , name : `หลักการพื้นฐานได้รับการพิจารณาและมีการรายงาน`},
        {number : 2 , code : `tech_trl2` , name : `มีการสร้างแนวคิดด้านเทคโนโลยี และ/หรือการประยุกต์ใช้`},
        {number : 3 , code : `tech_trl3` , name : `แนวคิดได้ถูกสาธิตด้วยการวิเคราะห์หรือด้วยการทดลอง`},
        {number : 4 , code : `tech_trl4` , name : `องค์ประกอบที่สำคัญได้ถูกสาธิตในระดับห้องปฏิบัติการแล้ว`},
        {number : 5 , code : `tech_trl5` , name : `องค์ประกอบที่สำคัญได้ถูกสาธิตในสภาวะแวดล้อมที่เกี่ยวข้อง`},
        {number : 6 , code : `tech_trl6` , name : `ตัวแทนสิ่งที่จะส่งมอบได้ถูกสาธิตในสภาวะแวดล้อมที่เกี่ยวข้อง`},
        {number : 7 , code : `tech_trl7` , name : `ผลของการพัฒนาขั้นสุดท้ายได้ถูกสาธิตในสภาวะทำงานจริง`},
        {number : 8 , code : `tech_trl8` , name : `สิ่งที่ส่งมอบจริงได้ผ่านการทดสอบและสาธิต (ใช้งานได้ตามสภาวะทำงานจริง)`},
        {number : 9 , code : `tech_trl9` , name : `การใช้งานของสิ่งที่ส่งมอบ (นำไปใช้ประโยชน์จริงแล้ว)`},
    ])

    const [data_srl] = useState([
        {number : 1 , code : `tech_srl1` , name : `วิเคราะห์ปัญหาและกำหนดความพร้อมของความรู้และเทคโนโลยีทางด้านสังคม `},
        {number : 2 , code : `tech_srl2` , name : `กำหนดปัญหา เสนอแนวคิดในการพัฒนาหรือการแก้ไขปัญหาและคาดการณ์ผลกระทบที่อาจเกิดขึ้น และระบุผู้มีส่วนได้ส่วนเสียที่เกี่ยวข้องในโครงการ`},
        {number : 3 , code : `tech_srl3` , name : `ศึกษา วิจัย ทดสอบแนวทางการพัฒนาหรือแก้ปัญหาที่กำหนดขึ้นร่วมกับผู้มีส่วนได้ส่วนเสียที่เกี่ยวข้อง`},
        {number : 4 , code : `tech_srl4` , name : `ตรวจสอบแนวทางการแก้ปัญหาในพื้นที่นำร่องเพื่อยืนยันผลกระทบตามที่คาดว่าจะเกิดขึ้น และดูความพร้อมขององค์ความรู้และเทคโนโลยี`},
        {number : 5 , code : `tech_srl5` , name : `แนวทางการแก้ปัญหาได้รับการตรวจสอบ ถูกนำเสนอแก่ผู้มีส่วนได้ส่วนเสียที่เกี่ยวข้อง`},
        {number : 6 , code : `tech_srl6` , name : `ผลการศึกษานำไปประยุกต์ใช้ในสิ่งแวดล้อมอื่น และดำเนินการกับผู้มีส่วนได้ส่วนเสียที่เกี่ยวข้องเพื่อให้ได้ข้อเสนอแนะเบื้องต้นเพื่อให้เกิดผลกระทบที่เป็นไปได้`},
        {number : 7 , code : `tech_srl7` , name : `ปรับปรุงโครงการและ/หรือการแนวทางการพัฒนา การแก้ปัญหา รวมถึงการทดสอบในสภาพแวดล้อมที่เกี่ยวข้องกับผู้มีส่วนได้ส่วนเสีย`},
        {number : 8 , code : `tech_srl8` , name : `เสนอแนวทางการพัฒนา การแก้ปัญหาในรูปแบบแผนการดำเนินงานที่สมบูรณ์ และได้รับการยอมรับ`},
        {number : 9 , code : `tech_srl9` , name : `แนวทางการพัฒนาและการแก้ปัญหาของโครงการได้รับการยอมรับและสามารถนำไป ประยุกต์ใช้ได้กับสิ่งแวดล้อมอื่น ๆ`},
    ])

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: `ขอยื่นจดทะเบียน - ${id}`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPathUser.Regis, active: false },
            { name: "ขอยื่นจดทะเบียน", url: routerPathUser.Regis, active: false },
            { name: `${id}`, url: `${routerPathUser.Regis}/view/${id}`, active: false },
            { name: `ระดับความพร้อม`, url: "", active: true },
        ]
    })

    const qe_srl_data = useQuery<APISrlTech_data, Error>('getSrl', async () => exportedAPITechLv.getSrl(id, user.token))
    const qe_trl_data = useQuery<APITrlTech_data, Error>('getTrl', async () => exportedAPITechLv.getTrl(id, user.token))

    const submitForm_srl = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        
        let data = {
            tech_srl_project_id : id,
            tech_srl1 : formdata.get('tech_srl1'),
            tech_srl2 : formdata.get('tech_srl2'),
            tech_srl3 : formdata.get('tech_srl3'),
            tech_srl4 : formdata.get('tech_srl4'),
            tech_srl5 : formdata.get('tech_srl5'),
            tech_srl6 : formdata.get('tech_srl6'),
            tech_srl7 : formdata.get('tech_srl7'),
            tech_srl8 : formdata.get('tech_srl8'),
            tech_srl9 : formdata.get('tech_srl9'),
        }

        const res = await exportedAPITechLv.createSrl(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getSrl')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form.current?.reset()

    }

    const submitForm_trl = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        
        let data = {
            tech_trl_project_id : id,
            tech_trl1 : formdata.get('tech_trl1'),
            tech_trl2 : formdata.get('tech_trl2'),
            tech_trl3 : formdata.get('tech_trl3'),
            tech_trl4 : formdata.get('tech_trl4'),
            tech_trl5 : formdata.get('tech_trl5'),
            tech_trl6 : formdata.get('tech_trl6'),
            tech_trl7 : formdata.get('tech_trl7'),
            tech_trl8 : formdata.get('tech_trl8'),
            tech_trl9 : formdata.get('tech_trl9'),
        }

        const res = await exportedAPITechLv.createTrl(data , user.token)

        if(res.bypass){
            queryClient.invalidateQueries('getTrl')
            exportedSwal.actionSuccess("เพิ่มข้อมูลเรียบร้อย !")

        }else{
            exportedSwal.actionInfo(res.message)
        }

        ref_form.current?.reset()

    }

    return {
        ...values,
        id,
        ref_form,
        data_trl,
        data_srl,
        submitForm_trl,
        submitForm_srl,
        qe_srl_data,
        qe_trl_data
    }
}