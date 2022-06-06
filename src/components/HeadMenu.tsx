import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routerPathUser } from '../utils/routerpath'
import StatusCores from './StatusCores';


type AppProps = {
    project_id: number,
};


function HeadMenu({ project_id }: AppProps) {

    const location = useLocation();

    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const fontSizeBtn = 13
    const fontSizeIcon = 13

    return (
        <div className='card'>
            <div className='card-body'>
                <div className='table-responsive'>
                    <table className="table table-striped table-bordered" width={`100%`}>
                        <thead>
                            <tr>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/peoples/${project_id}`}>
                                        <button className={splitLocation.includes('peoples') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >รายชื่อผู้ประดิษฐ์/ผู้สร้างสรรค์</button>
                                    </Link>
                                    <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/publishing/${project_id}`}>
                                        <button className={splitLocation.includes('publishing') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >ข้อมูลการเผยแพร่</button>
                                    </Link>
                                    <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/projects/${project_id}`}>
                                        <button className={splitLocation.includes('projects') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >ข้อมูลโครงการวิจัย</button>
                                    </Link>
                                    <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/details/${project_id}`}>
                                        <button className={splitLocation.includes('details') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >รายละเอียดผลงาน</button>
                                    </Link>
                                    <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/potentials/${project_id}`}>
                                        <button className={splitLocation.includes('potentials') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >การประเมินศักยภาพผลงาน</button>
                                    </Link>
                                    <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/attachments/${project_id}`}>
                                        <button className={splitLocation.includes('attachments') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >เอกสารแนบ</button>
                                    </Link>
                                    <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/confirm/${project_id}`}>
                                        <button className={splitLocation.includes('confirm') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} disabled >ส่งคำขอให้เจ้าหน้าที่</button>
                                    </Link>
                                    <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HeadMenu