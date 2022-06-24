import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import Infer from '../../components/core/13-Infer/Infer'
import HeadMenu from '../../components/HeadMenu'
import WarnList from '../../components/WarnList'
import FormDetailsVM from '../../viewmodel/FormDetails/FormDetailsVM'


function FormDetails() {

    const viewModel = FormDetailsVM()

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
                        project_id={viewModel.id} />

                    {
                        viewModel.qe_warnip_data.isLoading ?

                            <></>

                            :

                            <WarnList title={`รายละเอียดงาน`} item={viewModel.qe_warnip_data.data?.data.details!} />

                    }

                    <Infer />

                </div>
            </section>
        </div>
    )
}

export default FormDetails