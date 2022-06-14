import React from 'react'
import ChkboxCore from '../../components/ChkboxCore'
import ContentHeader from '../../components/content-header/ContentHeader'
import Fund from '../../components/core/8-Fund/Fund'
import Budget from '../../components/core/9-Budget/Budget'
import Bioreso from '../../components/core/11-Bioreso/Bioreso'
import Results from '../../components/core/12-Results/Results'
import HeadMenu from '../../components/HeadMenu'
import FormProjectsVM from '../../viewmodel/FormProjects/FormProjectsVM'
import LoadingData from '../../components/LoadingData'


function FormProjects() {

    const viewModel = FormProjectsVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu
                        token={viewModel.user.token}
                        project_id={viewModel.id}
                    />

                    {
                        viewModel.qe_coreip_data.isLoading || viewModel.qe_projects_data.isLoading ?

                            <LoadingData />

                            :

                            <>

                                <Fund
                                    chkbox_fund={
                                        <ChkboxCore
                                            chk_name={`chk_fund`}
                                            tilte_yes={`ได้รับทุนอุดหนุน (ขอให้ระบุแหล่งทุนที่ได้รับ พร้อมแนบสำเนาสัญญารับทุน/ ข้อตกลง/ TOR)`}
                                            tilte_no={`ไม่ได้รับทุนอุดหนุน`}
                                            chk_getData={(el) => viewModel.updateCoreIp(`core_fund`, el)}
                                            chk_value={viewModel.qe_coreip_data.data?.data.core_fund}
                                        />
                                    }
                                    core_fund={viewModel.qe_coreip_data.data?.data.core_fund === null ? 0 : viewModel.qe_coreip_data.data?.data.core_fund!}
                                    data_fund={viewModel.qe_projects_data.data?.data.fund_data!}
                                />

                                <Budget
                                    data_budget={viewModel.qe_projects_data.data?.data.budget_data!}
                                />


                                <Bioreso
                                    chkbox_bioreso={
                                        <ChkboxCore
                                            chk_name={`chkbox_bioreso`}
                                            tilte_yes={`มี (เลือกได้มากกว่า 1 ข้อ)`}
                                            tilte_no={`ไม่มี`}
                                            chk_getData={(el) => viewModel.updateCoreIp(`core_bioreso`, el)}
                                            chk_value={viewModel.qe_coreip_data.data?.data.core_bioreso}
                                        />
                                    }                            
                                    core_bioreso={viewModel.qe_coreip_data.data?.data.core_bioreso === null ? 0 : viewModel.qe_coreip_data.data?.data.core_bioreso!}
                                    data_bioreso={viewModel.qe_projects_data.data?.data.bioreso_data!}
                                />

                                <Results
                                    chkbox_results={
                                        <ChkboxCore
                                            chk_name={`chkbox_results`}
                                            tilte_yes={`มีการทดลอง`}
                                            tilte_no={`ไม่มี`}
                                            chk_getData={(el) => viewModel.updateCoreIp(`core_results`, el)}
                                            chk_value={viewModel.qe_coreip_data.data?.data.core_results}
                                        />
                                    }
                                    core_results={viewModel.qe_coreip_data.data?.data.core_results === null ? 0 : viewModel.qe_coreip_data.data?.data.core_results!}
                                    data_results={viewModel.qe_projects_data.data?.data.results_data!}
                                    
                                />


                            </>
                    }

                </div>
            </section>
        </div>
    )
}

export default FormProjects