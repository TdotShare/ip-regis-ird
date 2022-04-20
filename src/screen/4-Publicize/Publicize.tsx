import React from 'react'
import Button from '../../components/Button'
//import { Link } from 'react-router-dom'
import ContentHeader from '../../components/content-header/ContentHeader'
//import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import PeopleVM from '../../viewmodel/4-Publicize/PublicizeVM'

function Publicize() {

    const viewModel = PeopleVM()

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

                                    <div className="form-row">
                                        <div className="form-group col-md">
                                            <select className="custom-select" defaultValue={""} >
                                                <option value={""}>เลือกการนำเสนอผลงาน</option>
                                                <option value={"เป็นของใหม่ (Novelty) ไม่เคยเปิดเผยที่ใดมาก่อน"}>เป็นของใหม่ (Novelty) ไม่เคยเปิดเผยที่ใดมาก่อน</option>
                                                <option value={"มีขั้นการประดิษฐ์ที่สูงขึ้น (Inventive step)"}>มีขั้นการประดิษฐ์ที่สูงขึ้น (Inventive step)</option>
                                                <option value={"สามารถประยุกต์ใช้ในอุตสาหกรรมได้ (Industrial applicability)"}>สามารถประยุกต์ใช้ในอุตสาหกรรมได้ (Industrial applicability)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>



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

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label >เมื่อวันที่</label>
                                            <input type="text" className="form-control" name="expose_date" />
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
                                        <div className="form-group col-md-6">
                                            <label >ไฟล์เอกสารหนังสือรับรอง</label>
                                            <input type="text" className="form-control" name="expose_location" />
                                        </div>
                                    </div>

                                    <Button className='btn btn-block btn-success'>บันทึกข้อมูล</Button>

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

                                    <div className="form-row">
                                        <div className="form-group col-md">
                                            <label >หากเคย (โปรดระบุรายละเอียด วันเดือนปี หน่วยงานที่จัด และแนบหลักฐานการเผยแพร่ผลงาน)</label>
                                            <select className="custom-select" defaultValue={""} >
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
                                            <input type="text" className="form-control" name="publish_text" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md">
                                            <label >ไฟล์เอกสารหนังสือรับรอง</label>
                                            <input type="text" className="form-control" name="publish_file" />
                                        </div>
                                    </div>



                                    <Button className='btn btn-block btn-success'>บันทึกข้อมูล</Button>

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