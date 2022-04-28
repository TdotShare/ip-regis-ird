import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import LoadingData from '../../components/LoadingData'
import MenuTab from '../../components/MenuTab'
import TechLvVM from '../../viewmodel/19-TechLv/TechLvVM'

function TechLv() {

    const viewModel = TechLvVM()

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
                            <h3 className="card-title">ระดับความพร้อมของเทคโนโลยี (Technology Readiness Level : TRL)</h3>
                        </div>
                        <div className="card-body">

                            {
                                viewModel.qe_trl_data.isLoading ?

                                    <LoadingData />

                                    :

                                    <form onSubmit={viewModel.submitForm_trl} >

                                        <table className="table table-bordered" width={`100%`}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">หัวเรื่อง</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.data_trl.map((el) => (
                                                        <tr key={el.number}>
                                                            <th scope="row">
                                                                <div className="form-check">
                                                                    <input className="form-check-input position-static" name={el.code} type="checkbox" value={'1'} />
                                                                </div>
                                                            </th>
                                                            <td>{el.name}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>

                                        <div style={{ paddingBottom: "1%" }}></div>

                                        <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                                    </form>


                            }


                        </div>

                    </div>

                    <div className="card card-outline card-primary">
                        <div className="card-header">
                            <h3 className="card-title">ระดับความพร้อมของความรู้และเทคโนโลยีทางด้านสังคม (Societal Readiness Level – SRL)</h3>
                        </div>
                        <div className="card-body">

                            {
                                viewModel.qe_trl_data.isLoading ?

                                    <LoadingData />

                                    :

                                    <form onSubmit={viewModel.submitForm_srl} >

                                        <table className="table table-bordered" width={`100%`}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">หัวเรื่อง</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    viewModel.data_srl.map((el) => (
                                                        <tr key={el.number}>
                                                            <th scope="row">
                                                                <div className="form-check">
                                                                    <input className="form-check-input position-static"
                                                                     name={el.code} 
                                                                     defaultChecked={viewModel.qe_srl_data.data?.data?.[el.code] === 1 ? true : false }
                                                                     type="checkbox" value={'1'} />
                                                                </div>
                                                            </th>
                                                            <td>{el.name}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>

                                        <div style={{ paddingBottom: "1%" }}></div>

                                        <Button className='btn btn-block btn-primary'>บันทึกข้อมูล</Button>

                                    </form>



                            }

                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default TechLv