import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import PublicipVM from '../../viewmodel/20-Publicip/PublicipVM'

function Publicip() {

    const viewModel = PublicipVM()

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
                            <h3 className="card-title">การประชาสัมพันธ์ผลงานการประดิษฐ์นี้โดยมหาวิทยาลัย </h3>
                        </div>
                        <div className="card-body">
                            
                            {
                                viewModel.qe_publicip_data.isLoading ?

                                    <LoadingData />

                                    :

                                    <form onSubmit={viewModel.submitForm}>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <select name='public_agree_status' className="custom-select" 
                                                defaultValue={viewModel.qe_publicip_data.data?.data?.public_agree_status ? viewModel.qe_publicip_data.data?.data.public_agree_status : ""} 
                                                >
                                                    <option value={""}>คุณยินยอมหรือไม่ ?</option>
                                                    <option value={1}>ยินยอม</option>
                                                    <option value={2}>ไม่ยินยอม</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md">
                                                <label ><span style={{ color: 'red' }}>***</span> หากไม่ยินยอมโปรดระบุ</label>
                                                <input name='public_agree_text'
                                                type="text" 
                                                className="form-control"
                                                defaultValue={viewModel.qe_publicip_data.data?.data?.public_agree_text ? viewModel.qe_publicip_data.data?.data.public_agree_text : ""} 
                                                 />
                                            </div>
                                        </div>

                                        <Button type='submit' className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                                    </form>


                            }





                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Publicip