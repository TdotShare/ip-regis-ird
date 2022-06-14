import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import HeadMenu from '../../components/HeadMenu'
import FormConfirmVM from '../../viewmodel/FormConfirm/FormConfirmVM'


function FormConfirm() {

    const viewModel = FormConfirmVM()

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

                </div>
            </section>
        </div>
    )
}

export default FormConfirm