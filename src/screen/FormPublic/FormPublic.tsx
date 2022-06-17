import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import Publicip from '../../components/core/20-Publicip/Publicip'
import HeadMenu from '../../components/HeadMenu'
import FormPublicVM from '../../viewmodel/FormPublic/FormPublicVM'


function FormPublic() {

    const viewModel = FormPublicVM()

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

                    <Publicip />


                </div>
            </section>
        </div>
    )
}

export default FormPublic