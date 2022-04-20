import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import { routerPathUser } from '../../utils/routerpath'
import RegisVM from '../../viewmodel/0-Regis/RegisVM'

function Regis() {

    const viewModel = RegisVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">


                    <div className='row'>
                        <div className='col'>
                            <Link to={`${routerPathUser.Regis}/create`}><Button className='btn btn-primary'><i className="fas fa-plus"></i> ยื่นขอจดทะเบียน</Button></Link>
                        </div>
                    </div>

                    <div style={{ paddingBottom: '1%' }}></div>

                    <div className='card'>
                        <div className='card-body'>

                            {
                                viewModel.qe_project_data.isLoading ?


                                    <LoadingData />


                                    :

                                    <div className='row'>
                                        <div className='col'>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">ชื่อผลงาน (ไทย)</th>
                                                        <th scope="col">ชื่อผลงาน (ENG)</th>
                                                        <th scope="col">ประเภท</th>
                                                        <th scope="col">สถานะ</th>
                                                        <th scope="col">สร้างเมื่อ</th>
                                                        <th scope="col"></th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        viewModel.qe_project_data.data?.data.map((el, index) => (
                                                            <tr key={index} >
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{el.project_name_th}</td>
                                                                <td>{el.project_name_en}</td>
                                                                <td>{el.category_ip_name}</td>
                                                                <td>{el.project_status}</td>
                                                                <td>{el.project_create_at}</td>
                                                                <td><Link to={`${routerPathUser.Regis}/view/${el.project_id}`} ><button  className='btn btn-block btn-primary'>เพิ่มรายละเอียด</button></Link></td>
                                                                <td><button onClick={() => viewModel.actionDelete(el.project_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                            
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>

                            }

                        </div>
                    </div>





                </div>
            </section>
        </div>
    )
}

export default Regis