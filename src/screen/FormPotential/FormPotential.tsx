import React from 'react'
import ContentHeader from '../../components/content-header/ContentHeader'
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

                    การประเมินศักยภาพผลงาน
                    
                </div>
            </section>
        </div>
    )
}