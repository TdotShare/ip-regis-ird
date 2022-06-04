import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routerPathUser } from '../utils/routerpath'


type AppProps = {
    project_id: number,
};


function HeadMenu({ project_id }: AppProps) {

    const location = useLocation();


    const { pathname } = location;
    const splitLocation = pathname.split("/");


    return (
        <>
            <table className="table table-striped table-bordered" width={`100%`}>
                <thead>
                    <tr>
                        <th scope="col"><Link to={`${routerPathUser.Regis}/peoples/${project_id}`}><button className={splitLocation.includes('peoples') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: 12 }} >รายชื่อผู้ประดิษฐ์/ผู้สร้างสรรค์</button></Link></th>
                        <th scope="col"><Link to={`${routerPathUser.Regis}/publishing/${project_id}`}><button className={splitLocation.includes('publishing') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: 12 }} >ข้อมูลการเผยแพร่</button></Link></th>
                        <th scope="col"><Link to={`${routerPathUser.Regis}/projects/${project_id}`}><button className={splitLocation.includes('projects') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: 12 }} >ข้อมูลโครงการวิจัย</button></Link></th>
                        <th scope="col"><Link to={`${routerPathUser.Regis}/details/${project_id}`}><button className={splitLocation.includes('details') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: 12 }} >รายละเอียดผลงาน</button></Link></th>
                        <th scope="col"><Link to={`${routerPathUser.Regis}/potentials/${project_id}`}><button className={splitLocation.includes('potentials') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: 12 }} >การประเมินศักยภาพผลงาน</button></Link></th>
                        <th scope="col"><Link to={`${routerPathUser.Regis}/attachments/${project_id}`}><button className={splitLocation.includes('attachments') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: 12 }} >เอกสารแนบ</button></Link></th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default HeadMenu