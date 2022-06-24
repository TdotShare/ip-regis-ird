import React from 'react'
import Button from '../../components/Button'
import ContentHeader from '../../components/content-header/ContentHeader'
import HeadMenu from '../../components/HeadMenu'
import LoadingData from '../../components/LoadingData'
import RegisViewVM from '../../viewmodel/0-Regis/RegisViewVM'

function RegisView() {

    const viewModel = RegisViewVM()

    React.useEffect(() => {
        return () => {
            viewModel.queryClient.removeQueries('getProject')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="content-wrapper">

            <ContentHeader
                title={`${viewModel.title} - ${viewModel.query_project_data.isLoading ? "" : viewModel.query_project_data.data?.data.project_name_th}`}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu project_id={viewModel.id} token={viewModel.user.token} />

                    {
                        viewModel.query_project_data.isLoading ?

                            <></>

                            :

                            <>
                                {
                                    viewModel.user.role === "admin" && viewModel.query_project_data.data?.data.project_status !== 1 ?

                                        <>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className="card card-outline card-primary">
                                                        <div className="card-header">
                                                            <h3 className="card-title">ข้อมูลติดต่อกลับเจ้าของผลงาน</h3>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="form-row">
                                                                <div className="form-group col-md">
                                                                    <label >หมายเลขโทรศัพท์</label>
                                                                    <input type="text" className="form-control" defaultValue={viewModel.query_project_data.data?.data.project_tel ? viewModel.query_project_data.data?.data.project_tel : ""}  name="project_tel" readOnly={true} />
                                                                </div>
                                                                <div className="form-group col-md">
                                                                    <label >E-mail</label>
                                                                    <input type="text" className="form-control" defaultValue={viewModel.query_project_data.data?.data.project_email ? viewModel.query_project_data.data?.data.project_email : ""} name="project_email" readOnly={true} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="card card-outline card-primary">
                                                        <div className="card-header">
                                                            <h3 className="card-title">เลขที่คำขอ</h3>
                                                        </div>
                                                        <div className="card-body">
                                                            <form onSubmit={viewModel.submitFormNumberRegi}>
                                                                <div className="form-row">
                                                                    <div className="form-group col-md-12">
                                                                        <input type="text" className="form-control"
                                                                            defaultValue={viewModel.query_project_data.data?.data.project_regis_num ? viewModel.query_project_data.data?.data.project_regis_num : ""}
                                                                            name="project_regis_num" />
                                                                    </div>
                                                                </div>

                                                                <Button type='submit' className='btn btn-block btn-primary' >บันทึกข้อมูล</Button>

                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="card card-outline card-primary">
                                                        <div className="card-header">
                                                            <h3 className="card-title">สถานะการติดตาม</h3>
                                                        </div>
                                                        <div className="card-body">


                                                            <form onSubmit={viewModel.submitFormStatusRegi}>

                                                                {
                                                                    viewModel.query_statusip_data.isLoading ?

                                                                        <LoadingData />

                                                                        :

                                                                        <>
                                                                            <div className="form-row">
                                                                                <div className="form-group col-md">
                                                                                    <select name='status_id'
                                                                                        className="custom-select"
                                                                                        defaultValue={viewModel.query_project_data.data?.data.project_status ? viewModel.query_project_data.data?.data.project_status : ""}
                                                                                    >
                                                                                        <option value={""}>เลือกสถานะการติดตาม</option>
                                                                                        {
                                                                                            viewModel.query_statusip_data.data?.data.map((el, index) => (
                                                                                                <option key={index} value={el.status_id}>{el.status_name}</option>
                                                                                            ))
                                                                                        }
                                                                                    </select>
                                                                                </div>
                                                                            </div>

                                                                            <Button type='submit' className='btn btn-block btn-primary' >บันทึกข้อมูล</Button>
                                                                        </>
                                                                }

                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr />

                                        </>

                                        :

                                        <></>
                                }
                            </>
                    }


                </div>
            </section>
        </div>
    )
}

export default RegisView