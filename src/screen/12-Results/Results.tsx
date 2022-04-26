import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import ResultsVM from '../../viewmodel/12-Results/ResultsVM'

function Results() {

    const viewModel = ResultsVM()

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
                            <h3 className="card-title">ผลการวิจัย หรือผลการทดสอบ หรือผลการทดลอง (ขอให้นำผลดังกล่าวไประบุไว้ในรายละเอียดการประดิษฐ์)</h3>
                        </div>
                        <div className="card-body">

                            <div style={{ paddingBottom: `1%` }}></div>

                            <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm} >


                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <select name='results_head' className="custom-select" onChange={viewModel.actionShowOption} defaultValue={""} >
                                            <option value={""}>เลือกการทดลอง</option>
                                            <option value={0}>มีในระดับห้องทดลอง</option>
                                            <option value={1}>มีในสัตว์ทดลอง</option>
                                            <option value={2}>มีในมนุษย์</option>
                                        </select>
                                    </div>
                                </div>

                                {
                                    viewModel.showOptionText !== 0 && (
                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <select name='results_text' className="custom-select" onChange={viewModel.actionShowDetail} defaultValue={""} >
                                                    <option value={""}>เลือกการดำเนินการ</option>
                                                    {viewModel.showOptionText === 1 && (
                                                        <option value={1}>มีการดำเนินการขอรับการพิจารณาจรรยาบรรณการใช้สัตว์ทดลอง</option>
                                                    )}
                                                    {viewModel.showOptionText === 2 && (
                                                        <option value={1}>การดำเนินการขอรับการพิจารณาจากคณะกรรมการจริยธรรมการวิจัยในมนุษย์</option>
                                                    )}
                                                    <option value={2}>ไม่ได้ดำเนินการขอรับการพิจารณาฯ</option>
                                                </select>
                                            </div>
                                        </div>

                                    )
                                }

                                {
                                    viewModel.showOptionDetail === 1 && (
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label >เอกสารแนบ</label>
                                                <input type="file" className="form-control" name="results_file" accept="application/pdf" />
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    viewModel.showOptionDetail === 2 && (
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label >ไม่ได้ดำเนินการขอรับการพิจารณาฯ เนื่องจาก</label>
                                                <input type="text" className="form-control" name="results_detail" />
                                            </div>
                                        </div>
                                    )
                                }


                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>
                        </div>

                    </div>

                    <hr />

                    <div className='card'>
                        <div className='card-body'>
                        <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">หัวเรื่อง</th>
                                        <th scope="col">การดำเนินการ</th>
                                        <th scope="col">รายละเอียด</th>
                                        <th scope="col">ไฟล์</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Results