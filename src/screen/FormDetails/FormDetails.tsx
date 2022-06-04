import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
import HeadMenu from '../../components/HeadMenu'
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

                    <HeadMenu project_id={viewModel.id} />

                    รายละเอียดงาน
                    
                </div>
            </section>
        </div>
    )
}

export default FormDetails