import React from 'react'
import ChkboxCore from '../../components/ChkboxCore'
import ContentHeader from '../../components/content-header/ContentHeader'
import Fund from '../../components/core/8-Fund/Fund'
import Budget from '../../components/core/9-Budget/Budget'
import Bioreso from '../../components/core/11-Bioreso/Bioreso'
import Results from '../../components/core/12-Results/Results'
import HeadMenu from '../../components/HeadMenu'
import FormProjectsVM from '../../viewmodel/FormProjects/FormProjectsVM'


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

                    <HeadMenu project_id={viewModel.id} />

                    <Fund
                        chkbox_fund={
                            <ChkboxCore
                                chk_name={`chk_fund`}
                                tilte_yes={`ได้รับทุนอุดหนุน (ขอให้ระบุแหล่งทุนที่ได้รับ พร้อมแนบสำเนาสัญญารับทุน/ ข้อตกลง/ TOR)`}
                                tilte_no={`ไม่ได้รับทุนอุดหนุน`}
                                chk_getData={(el) => console.log(`chk_fund => ${el}`)}
                            />
                        }
                        core_fund={0}
                    />

                    <Budget />

                    <Bioreso
                        chkbox_bioreso={
                            <ChkboxCore
                                chk_name={`chkbox_bioreso`}
                                tilte_yes={`มี (เลือกได้มากกว่า 1 ข้อ)`}
                                tilte_no={`ไม่มี`}
                                chk_getData={(el) => console.log(`chkbox_bioreso => ${el}`)}
                            />
                        }
                        core_bioreso={0}
                    />

                    <Results
                        chkbox_results={
                            <ChkboxCore
                                chk_name={`chkbox_results`}
                                tilte_yes={`มีการทดลอง`}
                                tilte_no={`ไม่มี`}
                                chk_getData={(el) => console.log(`chkbox_results => ${el}`)}
                            />
                        }
                        core_results={0}
                    />

                </div>
            </section>
        </div>
    )
}

export default FormProjects