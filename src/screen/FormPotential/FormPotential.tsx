import React from 'react'
import ChkboxCore from '../../components/ChkboxCore'
import ContentHeader from '../../components/content-header/ContentHeader'
import Market from '../../components/core/16-Market/Market'
import Assessment from '../../components/core/17-Assessment/Assessment'
import TechLv from '../../components/core/19-TechLv/TechLv'
import HeadMenu from '../../components/HeadMenu'
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

                    <HeadMenu project_id={viewModel.id} />

                    <Market
                        chkbox_market={
                            <ChkboxCore
                                chk_name={`chkbox_market`}
                                tilte_yes={`มีบริษัทที่สนใจในผลงาน`}
                                tilte_no={`ไม่มี`}
                                chk_getData={(el) => console.log(`chkbox_market => ${el}`)}
                            />
                        }
                        core_market={0}
                    />

                    <Assessment
                        chkbox_expand={
                            <ChkboxCore
                                chk_name={`chkbox_expand`}
                                tilte_yes={`มี  (โปรดแนบเอกสาร)`}
                                tilte_no={`ไม่มี`}
                                chk_getData={(el) => console.log(`chkbox_expand => ${el}`)}
                            />
                        }
                        core_expand={0}
                    />

                    <TechLv />



                </div>
            </section>
        </div>
    )
}