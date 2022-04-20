import React from 'react'
//import { Link } from 'react-router-dom'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
//import { routerPathUser } from '../../utils/routerpath'
import PeopleVM from '../../viewmodel/3-People/PeopleVM'

function People() {

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
                                    <h3 className="card-title">เพิ่มข้อมูลรายชื่อผู้ประดิษฐ์ / ผู้สร้างสรรค์ </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={viewModel.submitForm} >

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label >ภาษาไทย</label>
                                                <input type="text" className="form-control" name="people_firstname" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label >ภาษาอังกฤษ</label>
                                                <input type="text" className="form-control" name="people_lastname" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label >ที่อยู่</label>
                                                <input type="text" className="form-control" name="people_address" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >เบอร์</label>
                                                <input type="text" className="form-control" name="people_tel" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >Email</label>
                                                <input type="text" className="form-control" name="people_email" />
                                            </div>
                                            <div className="form-group col-md">
                                                <label >สัดส่วนการประดิษฐ์/สร้างสรรค์ (%)</label>
                                                <input type="number" className="form-control" name="people_process" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >รูปภาพประจำตัว</label>
                                                <input type="file" className="form-control" accept='image/jpeg,image/png' onChange={viewModel.InputUploadFile_not_head} />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >สถานะ</label>
                                                <select className="custom-select" defaultValue={""} onChange={viewModel.actionSelectChange}>
                                                    <option value={""}>กรุณาเลือกสถานะ ผู้ประดิษฐ์ / ผู้สร้างสรรค์</option>
                                                    <option value={"บุคลากร มทร.อีสาน"}>บุคลากร มทร.อีสาน</option>
                                                    <option value={"นักศึกษา มทร.อีสาน "}>นักศึกษา มทร.อีสาน </option>
                                                    <option value={"บุคคลภายนอก"}>บุคคลภายนอก</option>
                                                </select>

                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >ชื่อผู้ประดิษฐ์ลำดับแรก</label>
                                                <select className="custom-select" defaultValue={""} onChange={viewModel.actionHeadChange}>
                                                    <option value={""}>ตั้งให้เป็นชื่อผู้ประดิษฐ์ลำดับแรกหรือไม่ ?</option>
                                                    <option value={"1"}>เป็น</option>
                                                    <option value={"0"}>ไม่เป็น </option>
                                                </select>

                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-block btn-success">เพื่มข้อมูล</button>

                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>

                            <div className="card card-outline card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">รายชื่อผู้ประดิษฐ์ / ผู้สร้างสรรค์</h3>
                                </div>
                                <div className="card-body">
                                    {
                                        viewModel.qe_people_data.isLoading

                                            ?


                                            <LoadingData />

                                            :

                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">ชื่อจริง - นามสกุล</th>
                                                        <th scope="col">ที่อยู่</th>
                                                        <th scope="col">เบอร์</th>
                                                        <th scope="col">อีเมลล์</th>
                                                        <th scope="col">สัดส่วนการประดิษฐ์/สร้างสรรค์</th>
                                                        <th scope="col">สถานะ</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        viewModel.qe_people_data.data?.data.map((el, index) => (
                                                            <tr key={index} >
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{el.people_firstname} {el.people_lastname} {el.people_head === 1 ? "(ผู้ประดิษฐ์ลำดับแรก)": "" }</td>
                                                                <td>{el.people_address}</td>
                                                                <td>{el.people_tel}</td>
                                                                <td>{el.people_email}</td>
                                                                <td>{el.people_process}</td>
                                                                <td>{el.people_type}</td>
                                                                <td><button onClick={() => viewModel.actionDelete(el.people_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
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

export default People