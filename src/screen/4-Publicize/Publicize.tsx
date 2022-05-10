import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import { Public_path } from '../../config/public_path'
import PublicizeVM from '../../viewmodel/4-Publicize/PublicizeVM'

function Publicize() {

    const viewModel = PublicizeVM()

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

                    <div className='row'>
                        <div className='col'>

                            <div className="card card-outline card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">ผลงานที่นำเสนอ</h3>
                                </div>
                                <div className="card-body">


                                    <form ref={viewModel.ref_form_present} onSubmit={viewModel.submitForm_Present}>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <select name='present_text' className="custom-select" defaultValue={""} >
                                                    <option value={""}>เลือกการนำเสนอผลงาน</option>
                                                    <option value={"เป็นของใหม่ (Novelty) ไม่เคยเปิดเผยที่ใดมาก่อน"}>เป็นของใหม่ (Novelty) ไม่เคยเปิดเผยที่ใดมาก่อน</option>
                                                    <option value={"มีขั้นการประดิษฐ์ที่สูงขึ้น (Inventive step)"}>มีขั้นการประดิษฐ์ที่สูงขึ้น (Inventive step)</option>
                                                    <option value={"สามารถประยุกต์ใช้ในอุตสาหกรรมได้ (Industrial applicability)"}>สามารถประยุกต์ใช้ในอุตสาหกรรมได้ (Industrial applicability)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                                    </form>

                                    <hr />

                                    {
                                        viewModel.qe_present_data.isLoading

                                            ?


                                            <LoadingData />

                                            :

                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">การนำเสนอผลงาน</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        viewModel.qe_present_data.data?.data.map((el, index) => (
                                                            <tr key={index} >
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{el.present_text}</td>
                                                                <td><button onClick={() => viewModel.actionDelete_Present(el.present_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                    }



                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>

                            <div className="card card-outline card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">การเปิดเผยสาระสำคัญ</h3>
                                </div>
                                <div className="card-body">

                                    <form ref={viewModel.ref_form_expose} onSubmit={viewModel.submitForm_Expose}>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label >เมื่อวันที่</label>
                                                <input type="text" className="form-control" name="expose_date" placeholder='31-12-2539' />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label >จัดโดยหน่วยงาน</label>
                                                <input type="text" className="form-control" name="expose_agency" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label >สถานที่</label>
                                                <input type="text" className="form-control" name="expose_location" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label >ประเทศ</label>
                                                <input type="text" className="form-control" name="expose_country" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label >ไฟล์เอกสารหนังสือรับรอง</label>
                                                <input type="file" className="form-control" name="expose_file" accept="application/pdf" />
                                            </div>
                                        </div>

                                        <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                                    </form>

                                    <hr />


                                    {
                                        viewModel.qe_expose_data.isLoading

                                            ?


                                            <LoadingData />

                                            :

                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">วันที่</th>
                                                        <th scope="col">จัดโดยหน่วยงาน</th>
                                                        <th scope="col">สถานที่</th>
                                                        <th scope="col">ประเทศ</th>
                                                        <th scope="col">เอกสารแนบ</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        viewModel.qe_expose_data.data?.data.map((el, index) => (
                                                            <tr key={index} >
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{el.expose_date}</td>
                                                                <td>{el.expose_agency}</td>
                                                                <td>{el.expose_location}</td>
                                                                <td>{el.expose_country}</td>
                                                                <td><a target={`_blank`} href={`${Public_path}/${viewModel.id}/expose/${el.expose_file}`} >{el.expose_file}</a></td>
                                                                <td><button onClick={() => viewModel.actionDelete_Expose(el.expose_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                    }

                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='row'>
                        <div className='col'>

                            <div className="card card-outline card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">การเผยแพร่ผลงาน</h3>
                                </div>
                                <div className="card-body">


                                    <form ref={viewModel.ref_form_publish} onSubmit={viewModel.submitForm_Publish}>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >หากเคย (โปรดระบุรายละเอียด วันเดือนปี หน่วยงานที่จัด และแนบหลักฐานการเผยแพร่ผลงาน)</label>
                                                <select name='publish_head' className="custom-select" defaultValue={""} >
                                                    <option value={""}>เลือกการเผยแพร่</option>
                                                    <option value={"การนำเสนอผลงาน หรือเปิดเผยการประดิษฐ์"}>การนำเสนอผลงาน หรือเปิดเผยการประดิษฐ์</option>
                                                    <option value={"การส่งผลงานตีพิมพ์"}>การส่งผลงานตีพิมพ์</option>
                                                    <option value={"การวางจำหน่าย"}>การวางจำหน่าย</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >รายละเอียด</label>
                                                <input name='publish_text' type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >ไฟล์เอกสารหนังสือรับรอง</label>
                                                <input name="publish_file" type="file" className="form-control" accept="application/pdf" />
                                            </div>
                                        </div>

                                        <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>
                                    </form>


                                    <hr />


                                    {
                                        viewModel.qe_publish_data.isLoading

                                            ?


                                            <LoadingData />

                                            :

                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">หัวเรื่อง</th>
                                                        <th scope="col">รายละเอียด</th>
                                                        <th scope="col">เอกสารแนบ</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        viewModel.qe_publish_data.data?.data.map((el, index) => (
                                                            <tr key={index} >
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{el.publish_head}</td>
                                                                <td>{el.publish_text}</td>
                                                                <td><a target={`_blank`} href={`${Public_path}/${viewModel.id}/publish/${el.publish_file}`} >{el.publish_file}</a></td>
                                                                <td><button onClick={() => viewModel.actionDelete_Publish(el.publish_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Publicize