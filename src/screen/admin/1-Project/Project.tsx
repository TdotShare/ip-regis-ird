import React from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import Pagination from '../../../components/Pagination'
import { routerPathUser } from '../../../utils/routerpath'
import ProjectAdminVM from '../../../viewmodel/admin/1-Project/Project'

function Project() {

  const viewModel = ProjectAdminVM()

  return (
    <div className="content-wrapper">
      <ContentHeader
        title={viewModel.title}
        breadcrumb={viewModel.breadcrumb}
      />
      <section className="content">
        <div className="container-fluid">


          <div style={{ paddingBottom: '1%' }}></div>

          <div className='card'>
            <div className='card-body'>

              {
                viewModel.qe_project_data.isLoading ?


                  <LoadingData />


                  :

                  <>

                    <div className='row'>
                      <div className='col'>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">ชื่อผลงาน (ไทย)</th>
                              <th scope="col">ชื่อผลงาน (ENG)</th>
                              <th scope="col">ประเภท</th>
                              <th scope="col">สถานะ</th>
                              <th scope="col">ชื่อผู้ที่ยื่นคำขอ</th>
                              <th scope="col">สร้างเมื่อ</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              viewModel.qe_project_data.data?.data.data.map((el, index) => (
                                <tr key={index} >
                                  <th scope="row">{index + 1}</th>
                                  <td>{el.project_name_th}</td>
                                  <td>{el.project_name_en}</td>
                                  <td>{el.category_ip_name} {el.project_category_ip_sub ? `(${el.project_category_ip_sub})` : ``}</td>
                                  <td>{el.status_name}</td>
                                  <td>{el.project_create_by}</td>
                                  <td>{el.project_create_at}</td>
                                  <td><Link to={`${routerPathUser.Regis}/view/${el.project_id}`} ><button className='btn btn-block btn-primary'>ดูรายละเอียด</button></Link></td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>

                      </div>
                    </div>


                    <div style={{ marginBottom: `1%` }}></div>

                    <Pagination
                      current_page={viewModel.qe_project_data.data?.data.current_page!}
                      last_page={viewModel.qe_project_data.data?.data.last_page!}
                      total={viewModel.qe_project_data.data?.data.data.length!}
                      nextClick={() => viewModel.setPage(viewModel.qe_project_data.data?.data.current_page! + 1)}
                      previousClick={() => viewModel.setPage(viewModel.qe_project_data.data?.data.current_page! - 1)}
                      numberClick={(num: number) => viewModel.setPage(num)}

                    />

                  </>

              }

            </div>
          </div>





        </div>
      </section>
    </div>
  )
}

export default Project