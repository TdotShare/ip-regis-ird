import React from 'react'
import ChkboxCore from '../../components/ChkboxCore'
import ContentHeader from '../../components/content-header/ContentHeader'
import Market from '../../components/core/16-Market/Market'
import Assessment from '../../components/core/17-Assessment/Assessment'
import TechLv from '../../components/core/19-TechLv/TechLv'
import HeadMenu from '../../components/HeadMenu'
import LoadingData from '../../components/LoadingData'
import FormPotentialVM from '../../viewmodel/FormPotential/FormPotentialVM'


export default function FormPotential() {

    const viewModel = FormPotentialVM()

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
                        viewModel.qe_coreip_data.isLoading || viewModel.qe_potential_data.isLoading ?

                            <LoadingData />

                            :

                            <>
                                <Market
                                    chkbox_market={
                                        <ChkboxCore
                                            chk_name={`chkbox_market`}
                                            tilte_yes={`มีบริษัทที่สนใจในผลงาน`}
                                            tilte_no={`ไม่มี`}
                                            chk_getData={(el) => viewModel.updateCoreIp(`core_market`, el)}
                                            chk_value={viewModel.qe_coreip_data.data?.data.core_market}
                                        />
                                    }
                                    core_market={viewModel.qe_coreip_data.data?.data.core_market === null ? 0 : viewModel.qe_coreip_data.data?.data.core_market!}
                                    data_market={viewModel.qe_potential_data.data?.data.market_data!}
                                />

                                <Assessment
                                    chkbox_expand={
                                        <ChkboxCore
                                            chk_name={`chkbox_expand`}
                                            tilte_yes={`มี  (โปรดแนบเอกสาร)`}
                                            tilte_no={`ไม่มี`}
                                            chk_getData={(el) => viewModel.updateCoreIp(`core_expand`, el)}
                                            chk_value={viewModel.qe_coreip_data.data?.data.core_expand}
                                        />
                                    }
                                    core_expand={viewModel.qe_coreip_data.data?.data.core_expand === null ? 0 : viewModel.qe_coreip_data.data?.data.core_expand!}
                                    data_charges={viewModel.qe_potential_data.data?.data.charges_data!}
                                    data_estimate={viewModel.qe_potential_data.data?.data.estimate_data!}
                                    data_expand={viewModel.qe_potential_data.data?.data.expand_data!}
                                    data_file_expand={viewModel.qe_potential_data.data?.data.expandfile_data!}
                                />


                                <TechLv
                                    data_srl={viewModel.qe_potential_data.data?.data.techsrl_data!}
                                    data_trl={viewModel.qe_potential_data.data?.data.techtrl_data!}
                                />

                            </>


                    }

                </div>
            </section>
        </div>
    )
}