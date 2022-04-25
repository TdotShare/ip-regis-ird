import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import { routerPathUser } from '../utils/routerpath';


type AppProps = {
    project_id : number,
    collapsed: boolean,
};

const MenuTab = ({ collapsed , project_id }: AppProps) => {


    const location = useLocation();


    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const navigate = useNavigate();

    const MenuList = [
        { number: "3", name: "รายชื่อผู้ประดิษฐ์ / ผู้สร้างสรรค์", path: `${routerPathUser.Regis}/people` , ac : "people" },
        { number: "4", name: "ผลงานที่นำเสนอ / การเปิดเผยสาระสำคัญ / การเผยแพร่ผลงาน", path: `${routerPathUser.Regis}/publicize` , ac : "publicize"},
        { number: "5", name: "การประดิษฐ์นี้มีการพัฒนาต่อยอด", path: `${routerPathUser.Regis}/furtherdev` , ac : "furtherdev" },
        { number: "6", name: "การสืบค้นข้อมูลสิทธิบัตร/อนุสิทธิบัตร (แนบเอกสารประกอบได้)", path: `${routerPathUser.Regis}/keyword` , ac : "keyword" },
        { number: "7", name: "การประดิษฐ์นี้เคยนำไปยื่นขอรับสิทธิบัตรหรืออนุสิทธิบัตรหรือไม่", path: `${routerPathUser.Regis}/movant` , ac : "movant"  },
        { number: "8", name: "การประดิษฐ์นี้ได้รับทุนอุดหนุนหรืออยู่ภายใต้ข้อตกลง หรือสัญญาใด ๆ กับหน่วยงานอื่นหรือไม่", path: `${routerPathUser.Regis}/fund` , ac : "fund" },
        { number: "9 - 10", name: "งบประมาณในการทำ / ระยะเวลาในการทำ", path: `${routerPathUser.Regis}/budget`  , ac : "budget" },
        { number: "11", name: "การประดิษฐ์นี้มีการใช้ทรัพยากรชีวภาพ", path: `${routerPathUser.Regis}/bioreso` , ac : "bioreso" },
        { number: "12", name: "ผลการวิจัย หรือผลการทดสอบ หรือผลการทดลอง", path: `${routerPathUser.Regis}/results`  , ac : "results" },
        { number: "13 - 14 - 15", name: "ข้อดีและลักษณะเฉพาะ / ที่มา ข้อมูลเบื้องต้น / สรุปจุดเด่น", path: `${routerPathUser.Regis}/infer` , ac : "infer" },
        { number: "16", name: "ข้อมูลทางการตลาด/ธุรกิจ/ อุตสาหกรรม", path: `${routerPathUser.Regis}/market` , ac : "market" },
        { number: "-", name: "การประเมินศักยภาพผลงานเพื่อสู่เชิงพาณิชย์", path: `${routerPathUser.Regis}/assessment` , ac : "assessment" },
        { number: "-", name: "ระดับความพร้อม", path: `${routerPathUser.Regis}/techlv` , ac : "techlv" },
        { number: "-", name: "ผลงานทรัพย์สินทางปัญญา", path: `${routerPathUser.Regis}/worksip` , ac : "worksip" },
    ]

    const actionGetMenu = (path: string) => {
        navigate(`${path}/${project_id}`)
    }

    return (
        <div className={`card ${collapsed ? 'collapsed-card' : ''}`}>
            <div className="card-header">
                <h3 className="card-title">เมนูหมวดการกรอกข้อมูล</h3>
                <div className="card-tools">
                    {

                        collapsed

                            ?
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" /></button>
                            :
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" /></button>



                    }
                </div>

            </div>

            <div className="card-body">

                <div className='row'>
                    <div className='col'>

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">หมวดกรอกข้อมูล</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    MenuList.map((el, index) => (
                                        <tr className={`${splitLocation.includes(el.ac) ? 'table-active' : ''}`} key={index} onClick={() => actionGetMenu(el.path)}>
                                            <th scope="row">{el.number}</th>
                                            <td>{el.name}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

        </div>
    )


}


export default MenuTab