import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import AssessmentVM from '../../viewmodel/17-Assessment/AssessmentVM'

function Assessment() {

    const viewModel = AssessmentVM()

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
                            <h3 className="card-title">ท่านต้องการนำผลงานไปขยายผลสู่เชิงพาณิชย์/ ถ่ายทอดเทคโนโลยีหรือไม่</h3>
                        </div>
                        <div className="card-body">

                            <div style={{ paddingBottom: `1%` }}></div>

                            <form  >



                                <div className="form-row">
                                    <div className="form-group col-md">
                                        <select name='expand_number_title' className="custom-select" onChange={viewModel.actionShowOption} defaultValue={""} >
                                            <option value={""}>เลือกประเภทการได้รับทุน</option>
                                            <option value={1}>ต้องการถ่ายทอดเทคโนโลยี </option>
                                            <option value={2}>ต้องการขยายผลสู่เชิงพาณิชย์ </option>
                                            <option value={3}>ไม่ต้องการ</option>
                                            <option value={4}>ต้องการแต่ยังไม่พร้อม</option>
                                        </select>
                                    </div>
                                </div>

                                {
                                    [3, 4].includes(viewModel.showOptionText) ?


                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label >โปรดระบุสาเหตุ</label>
                                                <input name='expand_note' type="text" className="form-control" />
                                            </div>
                                        </div>

                                        :

                                        <></>
                                }


                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>


                            <hr />

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">หัวเรื่อง</th>
                                        <th scope="col">สาเหตุ / รายละเอียด</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>


                        </div>

                    </div>


                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">การประเมินต้นทุนเบื้องต้น</h3>
                        </div>
                        <div className="card-body">

                            <div style={{ paddingBottom: `1%` }}></div>


                            <div className="form-row">
                                <div className="form-group col-md">
                                    <label >ต้นทุนในการวิจัย</label>
                                    <select name='estimate_price' className="custom-select" defaultValue={""} >
                                        <option value={""}>เลือกประเภทการได้รับทุน</option>
                                        <option value={`ต่ำกว่า 50,000`}>ต่ำกว่า 50,000</option>
                                        <option value={`50,000 - 100,000`}>50,000 - 100,000 </option>
                                        <option value={`100,001 - 500,000`}>100,001 - 500,000</option>
                                        <option value={`500,001 - 1,000,000`}>500,001 - 1,000,000</option>
                                        <option value={`มากกว่า 1,000,000 ขึ้นไป`}>มากกว่า 1,000,000 ขึ้นไป</option>
                                    </select>
                                </div>
                                <div className="form-group col-md">
                                    <label >ระยะเวลาในการวิจัย</label>
                                    <select name='estimate_timeline' className="custom-select" defaultValue={""} >
                                        <option value={""}>เลือกประเภทการได้รับทุน</option>
                                        <option value={`ต่ำกว่า 1 ปี`}>ต่ำกว่า 1 ปี </option>
                                        <option value={`1 - 5 ปี`}>1 - 5 ปี </option>
                                        <option value={`5 - 10 ปี`}>5 - 10 ปี</option>
                                        <option value={`10 ปีขึ้นไป`}>10 ปีขึ้นไป</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md">
                                    <label >ต้นทุนผลิตภัณฑ์/ ต้นทุนการผลิตชิ้นงาน/ต่อชิ้น (ไม่รวมค่าแรงและค่าบรรจุภัณฑ์)</label>
                                    <input name='estimate_product' type="number" className="form-control" placeholder='กรอกราคา' />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md">
                                    <label >ราคาขายในท้องตลาด</label>
                                    <input name='estimate_sell' type="number" className="form-control" placeholder='กรอกราคา' />
                                </div>
                            </div>

                            <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>


                        </div>

                    </div>

                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">ด้านการตลาด</h3>
                        </div>
                        <div className="card-body">

                            <div style={{ paddingBottom: `1%` }}></div>

                            <table className="table table-bordered" width={`100%`}>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">มูลค่าทางการตลาด</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div className="form-check">
                                                <input className="form-check-input position-static" name='charges_newproduct' type="checkbox" value={'1'} />
                                            </div>
                                        </th>
                                        <td>ผลิตภัณฑ์ใหม่</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="form-check">
                                                <input className="form-check-input position-static" name='charges_substitute' type="checkbox" value={'1'} />
                                            </div>
                                        </th>
                                        <td>ทดแทนการนำเข้า</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="form-check">
                                                <input className="form-check-input position-static" name='charges_reduction' type="checkbox" value={'1'} />
                                            </div>
                                        </th>
                                        <td>เป็นการลดต้นทุนการผลิต</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">

                                        </th>
                                        <td><b>แหล่งจำหน่ายสินค้า</b></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="form-check">
                                                <input className="form-check-input position-static" name='charges_market_in' type="checkbox" value={'1'} />
                                            </div>
                                        </th>
                                        <td>ตลาดภายในประเทศ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div className="form-check">
                                                <input className="form-check-input position-static" name='charges_market_out' type="checkbox" value={'1'} />
                                            </div>
                                        </th>
                                        <td>ตลาดภายนอกประเทศ</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div style={{paddingBottom : `1%`}}></div>

                            <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>



                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Assessment