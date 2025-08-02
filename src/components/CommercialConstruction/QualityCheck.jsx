import React from 'react'

const QualityCheck = () => {
  return (
    <>
    <div className='QualityCheck-parent'>
        <div className="container-lg container-xl container-xxl">
            <div className='QualityCheck-title'>
                <h1>Quality Check Mechanism</h1>
                <div className='QualityCheck-title-sub'>
                    <h5>310+ Quality Checks</h5>
                </div>
                <p>We believe in hands-on quality. That's why we don't subcontract our work. Every
nail, every beam, every detail is overseen by our experienced team</p>
            </div>
            <div className='Qualitycheck-main-image'>
                <img src="/commercialconstruction/qualityimage.png" alt="" />
            </div>
            <div className="row">
                <div className="col-sm-4 col-md-4">
                    <div className="QualityCheck-content">
                        <div className='QualityCheck-content-image'>
                            <img src="/verified.svg" alt="" />
                        </div>
                        <h5>Essential Site Checks:</h5>
                        <p>Checks required at each site visit, regardless of the project stage.</p>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="QualityCheck-content">
                        <div className='QualityCheck-content-image'>
                            <img src="/verified.svg" alt="" />
                        </div>
                        <h5>No-Go Quality Checks:</h5>
                        <p>Sequential inspections ensure a project advances only when specific quality
benchmarks for each stage are met</p>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4">
                    <div className="QualityCheck-content">
                        <div className='QualityCheck-content-image'>
                            <img src="/verified.svg" alt="" />
                        </div>
                        <h5>Essential Quality Checks:</h5>
                        <p>Site engineers must ensure critical quality checks are cleared to uphold the
project's overall quality</p>
                    </div>
                </div>
                <div className='Qualitychek-below-content'>
                    <p>We have a 3 Level Audit System through our state of the art technology : Contractor - Site Engineer - Project Manager</p>
                </div>
            </div>
        </div>

    </div>
    </>

  )
}

export default QualityCheck