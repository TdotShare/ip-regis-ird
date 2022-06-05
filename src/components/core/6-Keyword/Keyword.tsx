import React from 'react'
import Button from '../../Button'
import ContentHeader from '../../content-header/ContentHeader'
import LoadingData from '../../LoadingData'
import MenuTab from '../../MenuTab'
import KeywordVM from '../../../viewmodel/6-Keyword/KeywordVM'

function Keyword() {

    const viewModel = KeywordVM()

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
                            <h3 className="card-title">การสืบค้นข้อมูลสิทธิบัตร - อนุสิทธิบัตร</h3>
                        </div>
                        <div className="card-body">

                            {viewModel.qe_keyword_data.isLoading



                                ?

                                <LoadingData />

                                :

                                <form onSubmit={viewModel.submitForm_keyword}>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label >keyword ที่ใช้ในการสืบค้น</label>
                                            <input name="keyword_use" type="text" className="form-control" defaultValue={viewModel.qe_keyword_data.data?.data?.keyword_use !== null ? viewModel.qe_keyword_data.data?.data?.keyword_use : ''} />
                                        </div>
                                    </div>


                                    <div className="form-row">
                                        <div className="form-group col-md">
                                            <label >ผลของการสืบค้นพบว่า</label>
                                            <select name='keyword_result' className="custom-select" defaultValue={viewModel.qe_keyword_data.data?.data?.keyword_result !== null ? viewModel.qe_keyword_data.data?.data?.keyword_result : ""} >
                                                <option value={""}>เลือกผลการสืบค้น</option>
                                                <option value={1}>เหมือนหรือคล้ายกับงานที่ปรากฏอยู่ก่อนแล้ว </option>
                                                <option value={0}>ไม่เหมือนหรือคล้ายกับงานที่ปรากฏอยู่แล้ว</option>
                                            </select>
                                        </div>
                                    </div>

                                    <hr />

                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Website ที่ใช้ในการสืบค้น </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input position-static" defaultChecked={viewModel.qe_keyword_data.data?.data?.keyword_web_th === 1 ? true : false} name='keyword_web_th' type="checkbox" value={'1'} />
                                                    </div>
                                                </th>
                                                <td>ประเทศไทย : https://www.ipthailand.go.th</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input position-static" defaultChecked={viewModel.qe_keyword_data.data?.data?.keyword_web_epo === 1 ? true : false} name='keyword_web_epo' type="checkbox" value={'1'} />
                                                    </div>
                                                </th>
                                                <td>ยุโรป : https://www.epo.org </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input position-static" defaultChecked={viewModel.qe_keyword_data.data?.data?.keyword_web_us === 1 ? true : false} name='keyword_web_us' type="checkbox" value={'1'} />
                                                    </div>
                                                </th>
                                                <td>สหรัฐอเมริกา : https://www.uspto.gov</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input position-static" defaultChecked={viewModel.qe_keyword_data.data?.data?.keyword_web_jp === 1 ? true : false} name='keyword_web_jp' type="checkbox" value={'1'} />
                                                    </div>
                                                </th>
                                                <td>ญี่ปุ่น : https://www.jpo.go.jp</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label >อื่นๆ โปรดระบุ</label>
                                            <input type="text" className="form-control" defaultValue={viewModel.qe_keyword_data.data?.data?.keyword_web_other !== null ? viewModel.qe_keyword_data.data?.data?.keyword_web_other : ''} name="keyword_web_other" />
                                        </div>
                                    </div>

                                    <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                                </form>

                            }



                        </div>

                    </div>

                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">รายการของสิทธิบัตรหรืออนุสิทธิบัตรที่เกี่ยวข้องที่ได้จากการสืบค้น</h3>
                        </div>
                        <div className="card-body">

                            <form ref={viewModel.ref_form} onSubmit={viewModel.submitForm_searchlist}>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label >ชื่อที่แสดงถึงการประดิษฐ์</label>
                                        <input type="text" className="form-control" name="searchlist_name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >เลขที่สิทธิบัตร / อนุสิทธิบัตร</label>
                                        <input type="text" className="form-control" name="searchlist_number" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label >ประเทศ</label>
                                        <input type="text" className="form-control" name="searchlist_country" />
                                    </div>
                                </div>

                                <Button className='btn btn-block btn-success'>เพิ่มข้อมูล</Button>

                            </form>

                        </div>

                    </div>

                    {
                        viewModel.qe_searchlist_data.isLoading

                            ?

                            <LoadingData />

                            :

                            <div className='card'>
                                <div className='card-body'>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">ชื่อที่แสดงถึงการประดิษฐ์</th>
                                                    <th scope="col">เลขที่สิทธิบัตร / อนุสิทธิบัตร</th>
                                                    <th scope="col">ประเทศ</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.qe_searchlist_data.data?.data.map((el, index) => (
                                                        <tr key={index} >
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{el.searchlist_name}</td>
                                                            <td>{el.searchlist_number}</td>
                                                            <td>{el.searchlist_country}</td>
                                                            <td><button onClick={() => viewModel.actionDelete(el.searchlist_id)} className='btn btn-block btn-danger'>ลบข้อมูล</button></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    }




                </div>
            </section >
        </div >
    )
}

export default Keyword