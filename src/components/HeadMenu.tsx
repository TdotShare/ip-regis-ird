import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom'
import { Project } from '../model/2-Project/Project';
import { APIProcessMenu_data } from '../model/ProcessMenu';
import exportedAPIFormCoreip from '../utils/api/FormCoreip';
import { keyQueryPath } from '../utils/keyquery';
import { routerPathUser } from '../utils/routerpath'
import LoadingData from './LoadingData';
import StatusCores from './StatusCores';


type AppProps = {
    project_id: number,
    token: string,
    project_data?: Project,
};

function HeadMenu({ project_id, token, project_data }: AppProps) {

    const location = useLocation();

    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const qe_processmenu_data = useQuery<APIProcessMenu_data, Error>(keyQueryPath.getProcessmenu, async () => exportedAPIFormCoreip.getProcessMenu(project_id, token))

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

                                    {
                                        qe_processmenu_data.isLoading ?

                                            <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                            :

                                            <StatusCores status={qe_processmenu_data.data?.data.peoples!} fontSizeIcon={fontSizeIcon} />

                                    }
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/publishing/${project_id}`}>
                                        <button className={splitLocation.includes('publishing') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >ข้อมูลการเผยแพร่</button>
                                    </Link>
                                    {
                                        qe_processmenu_data.isLoading ?

                                            <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                            :

                                            <StatusCores status={qe_processmenu_data.data?.data.publishing!} fontSizeIcon={fontSizeIcon} />

                                    }
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/projects/${project_id}`}>
                                        <button className={splitLocation.includes('projects') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >ข้อมูลโครงการวิจัย</button>
                                    </Link>
                                    {
                                        qe_processmenu_data.isLoading ?

                                            <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                            :

                                            <StatusCores status={qe_processmenu_data.data?.data.projects!} fontSizeIcon={fontSizeIcon} />

                                    }
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/details/${project_id}`}>
                                        <button className={splitLocation.includes('details') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >รายละเอียดผลงาน</button>
                                    </Link>
                                    {
                                        qe_processmenu_data.isLoading ?

                                            <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                            :

                                            <StatusCores status={qe_processmenu_data.data?.data.details!} fontSizeIcon={fontSizeIcon} />

                                    }
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/potentials/${project_id}`}>
                                        <button className={splitLocation.includes('potentials') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >การประเมินศักยภาพผลงาน</button>
                                    </Link>
                                    {
                                        qe_processmenu_data.isLoading ?

                                            <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                            :

                                            <StatusCores status={qe_processmenu_data.data?.data.potentials!} fontSizeIcon={fontSizeIcon} />

                                    }
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/public/${project_id}`}>
                                        <button className={splitLocation.includes('public') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >การประชาสัมพันธ์</button>
                                    </Link>
                                    {
                                        qe_processmenu_data.isLoading ?

                                            <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                            :

                                            <StatusCores status={qe_processmenu_data.data?.data.public!} fontSizeIcon={fontSizeIcon} />

                                    }
                                </th>
                                <th scope="col">
                                    <Link to={`${routerPathUser.Regis}/attachments/${project_id}`}>
                                        <button className={splitLocation.includes('attachments') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >เอกสารแนบ</button>
                                    </Link>
                                    {
                                        qe_processmenu_data.isLoading ?

                                            <StatusCores status={0} fontSizeIcon={fontSizeIcon} />
                                            :

                                            <StatusCores status={qe_processmenu_data.data?.data.attachments!} fontSizeIcon={fontSizeIcon} />

                                    }
                                </th>
                                <th scope="col">

                                    {
                                        qe_processmenu_data.isLoading ?

                                            <LoadingData />

                                            :

                                            qe_processmenu_data.data?.data.checked === 1 ?

                                                <>
                                                    <Link to={`${routerPathUser.Regis}/view/${project_id}`}>
                                                        {
                                                            <button className={splitLocation.includes('view') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} >ตรวจสอบข้อมูล</button>
                                                        }
                                                    </Link>

                                                    <StatusCores status={qe_processmenu_data.data?.data.confirm!} confirm={true} fontSizeIcon={fontSizeIcon} />
                                                </>


                                                :

                                                <>
                                                    <Link to={`${routerPathUser.Regis}/confirm/${project_id}`}>
                                                        {
                                                            <button className={splitLocation.includes('confirm') ? `btn btn-block btn-success` : `btn btn-block btn-primary`} style={{ fontSize: fontSizeBtn }} disabled={qe_processmenu_data.data?.data.confirm === 1 ? false : true} >ส่งคำขอให้เจ้าหน้าที่</button>
                                                        }
                                                    </Link>

                                                    <StatusCores status={qe_processmenu_data.data?.data.confirm!} confirm={true} fontSizeIcon={fontSizeIcon} />
                                                </>
                                    }




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