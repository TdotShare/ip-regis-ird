import React from 'react'
import ChkboxCore from '../../components/ChkboxCore'
import ContentHeader from '../../components/content-header/ContentHeader'
import Publicize from '../../components/core/4-Publicize/Publicize'
import Furtherdev from '../../components/core/5-Furtherdev/Furtherdev'
import Keyword from '../../components/core/6-Keyword/Keyword'
import Movant from '../../components/core/7-Movant/Movant'
import HeadMenu from '../../components/HeadMenu'
import FormPublishingVM from '../../viewmodel/FormPublishing/FormPublishingVM'


function FormPublishing() {

    const viewModel = FormPublishingVM()

    return (
        <div className="content-wrapper">
            <ContentHeader
                title={viewModel.title}
                breadcrumb={viewModel.breadcrumb}
            />
            <section className="content">
                <div className="container-fluid">

                    <HeadMenu project_id={viewModel.id} />

                    <Publicize
                        chkbox_expose={
                            <ChkboxCore
                                chk_name={`chk_expose`}
                                tilte_yes={`ได้มีการเปิดเผยสาระสำคัญหรือรายละเอียดของการประดิษฐ์ (กรุณาแนบหนังสือรับรอง)`}
                                tilte_no={`ยังไม่ได้มีการเปิดเผยสาระสำคัญหรือรายละเอียดของการประดิษฐ์`}
                                chk_getData={(el) => console.log(`chk_expose => ${el}`)}
                            />
                        }
                        core_expose={0}
                        chkbox_present={
                            <ChkboxCore
                                chk_name={`chk_present`}
                                tilte_yes={`เคย (โปรดระบุรายละเอียด วันเดือนปี หน่วยงานที่จัด และแนบหลักฐานการเผยแพร่ผลงาน)`}
                                tilte_no={`ไม่เคยนำผลงานออกเผยแพร่มาก่อน`}
                                chk_getData={(el) => console.log(`chk_present => ${el}`)}
                            />
                        }
                        core_present={0}
                    />
                    
                    <Furtherdev
                        chkbox_furtherdev={
                            <ChkboxCore
                                chk_name={`chk_furtherdev`}
                                tilte_yes={`มี (ขอให้ระบุแหล่งที่มา)`}
                                tilte_no={`ไม่มี`}
                                chk_getData={(el) => console.log(`chk_furtherdev => ${el}`)}
                            />
                        }
                        core_furtherdev={0}
                    />

                    <Keyword />

                    <Movant
                        chkbox_movant={
                            <ChkboxCore
                                chk_name={`chk_movant`}
                                tilte_yes={`เคย (ขอให้ระบุรายละเอียด)`}
                                tilte_no={`ไม่เคย`}
                                chk_getData={(el) => console.log(`chk_movant => ${el}`)}
                            />
                        }
                        core_movant={0}
                    />

                </div>
            </section>
        </div>
    )
}

export default FormPublishing