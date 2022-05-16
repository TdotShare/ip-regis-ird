import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import { Public_path } from '../../config/public_path'
import WorksipVM from '../../viewmodel/18-Worksip/WorksipVM'

function Worksip() {

    const viewModel = WorksipVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <MenuTab project_id={viewModel.id} collapsed={true} />

                    <div style={{ paddingBottom: "1%" }}></div>


                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">รูปผลงานของคุณ (ลงได้มากกว่า 1 รูป)</h3>
                        </div>
                        <div className="card-body">

                            <form ref={viewModel.ref_form_galleryip} onSubmit={viewModel.submitForm_Galleryip} >

                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <label >รายละเอียดรูปภาพ</label>
                                        <input name='gallery_detail' type="text" className="form-control" placeholder='ผลงาน xxx รูปภาพจากมุมข้างบน' />
                                    </div>
                                    <div className="form-group col-md">
                                        <label >ไฟล์แนบ</label>
                                        <input name='gallery_file' type="file" className="form-control" accept=".jpg,.jpeg,.png" />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>

                            <hr />

                            {
                                viewModel.qe_galleryip_data.isLoading ?

                                    <LoadingData />

                                    :
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">รายละเอียดรูปภาพ</th>
                                                    <th scope="col">รูปภาพ</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.qe_galleryip_data.data?.data.map((el, index) => (
                                                        <tr key={index} >
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{el.gallery_detail}</td>
                                                            <td><a target={`_blank`} href={`${Public_path}/${viewModel.id}/gallery/${el.gallery_file}`} >{el.gallery_file}</a></td>
                                                            <td><button onClick={() => viewModel.actionDeleteGalleryip(el.gallery_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                            }



                        </div>
                    </div>

                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">ไฟล์เอกสารผลงานของคุณ</h3>
                        </div>
                        <div className="card-body">

                            <form ref={viewModel.ref_form_fileip} onSubmit={viewModel.submitForm_Fileip} >

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label >รายละเอียดไฟล์</label>
                                        <input name='fileip_detail' type="text" className="form-control" placeholder='ชื่อไฟล์ , รายละเอียดย่อๆ' />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label >ไฟล์แนบ</label>
                                        <input name='fileip_file' type="file" className="form-control" accept="application/pdf,.doc,.docx" />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>

                            <hr />

                            {
                                viewModel.qe_fileip_data.isLoading ?

                                    <LoadingData />

                                    :
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">รายละเอียดไฟล์</th>
                                                    <th scope="col">ไฟล์แนบ</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.qe_fileip_data.data?.data.map((el, index) => (
                                                        <tr key={index} >
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{el.fileip_detail}</td>
                                                            <td><a target={`_blank`} href={`${Public_path}/${viewModel.id}/fileip/${el.fileip_file}`} >{el.fileip_file}</a></td>
                                                            <td><button onClick={() => viewModel.actionDeleteFileip(el.fileip_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                            }

                        </div>
                    </div>

                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">ลิงค์ที่เกี่ยวข้อง</h3>
                        </div>
                        <div className="card-body">

                            <form ref={viewModel.ref_form_linkip} onSubmit={viewModel.submitForm_Linkip} >

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label >url</label>
                                        <input name='link_working' type="text" className="form-control" placeholder='https://xxx.com' />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>

                            <hr />

                            {
                                viewModel.qe_linkip_data.isLoading ?

                                    <LoadingData />

                                    :

                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">url</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.qe_linkip_data.data?.data.map((el, index) => (
                                                        <tr key={index} >
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{el.link_working}</td>
                                                            <td><button onClick={() => viewModel.actionDeleteLinkip(el.link_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                            }

                        </div>
                    </div>

                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">ลิงค์วิดีโอ</h3>
                        </div>
                        <div className="card-body">

                            <form ref={viewModel.ref_form_videoip} onSubmit={viewModel.submitForm_Videoip} >

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label >url</label>
                                        <input name='video_url' type="text" className="form-control" placeholder='https://xxx.com' />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>

                            <hr />

                            {
                                viewModel.qe_videoip_data.isLoading ?

                                    <LoadingData />

                                    :

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">url</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                viewModel.qe_videoip_data.data?.data.map((el, index) => (
                                                    <tr key={index} >
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{el.video_url}</td>
                                                        <td><button onClick={() => viewModel.actionDeleteVideoip(el.video_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                            }

                        </div>
                    </div>





                </div>
            </section>
        </div>
    )
}

export default Worksip