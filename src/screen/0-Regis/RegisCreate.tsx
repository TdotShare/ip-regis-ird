import React  from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import RegisCreateVM from '../../viewmodel/0-Regis/RegisCreateVM'

function RegisCreate() {

    const viewModel = RegisCreateVM()
    
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

                            <div className="card card-outline card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">ชื่อที่แสดงถึงการประดิษฐ์</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label >ภาษาไทย</label>
                                            <input type="text" className="form-control" name="ip_name_th" onChange={viewModel.onChange} defaultValue={viewModel.ip_name_th} />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label >ภาษาอังกฤษ</label>
                                            <input type="text" className="form-control" name="ip_name_en" onChange={viewModel.onChange} defaultValue={viewModel.ip_name_en} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>

                            <div className="card card-outline card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">ประเภทของทรัพย์สินทางปัญญา</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <select className="custom-select" name='ip_category_id' defaultValue={0} onChange={viewModel.actionSelectChange}>
                                                <option value={0} >เลือกประเภทของทรัพย์สินทางปัญญา</option>
                                                {
                                                    viewModel.ip_category_data.map((el, index) => (
                                                        <option key={index} value={el.category_ip_id}>{el.category_ip_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    {
                                        viewModel.ip_category_option
                                        &&
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label >โปรดระบุเพิ่มเติม (ลิขสิทธิ์ประเภท ... , อื่น ระบบ ...)</label>
                                                <input type="text" className="form-control" name="ip_category_sub" onChange={viewModel.onChange} defaultValue={viewModel.ip_category_sub} />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <Button onClick={viewModel.actionCreate} btn_block={true} >สร้าง</Button>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default RegisCreate