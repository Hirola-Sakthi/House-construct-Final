import React from 'react'

const HiringProcess = () => {
    return (
        <>
            <div className='HiringProcess-parent'>
                <div className="container-lg container-xl container-xxl">
                    <h1 className='text-center'> <span>HIRING</span> PROCESS</h1>
                    <h5>Are You The Perfect Fit For House Construct?</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <div className='HiringProcess-subparent'>
                                <div className='HiringProcess-sub-image'>
                                    <img src="/cv.png" alt="" />
                                </div>
                                <div className='HiringProcess-sub-image-content'>
                                    <h3>01</h3>
                                    <p>Want to redefine your future with us, Apply now with your updated resume at
                                        support@houseconstruct.in
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='HiringProcess-subparent'>
                                <div className='HiringProcess-sub-image'>
                                    <img src="./interview.svg" alt="" />
                                </div>
                                <div className='HiringProcess-sub-image-content'>
                                    <h3>02</h3>
                                    <p>Face to Face Interview</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className='HiringProcess-subparent'>
                                <div className='HiringProcess-sub-image'>
                                    <img src="./handshake.svg" alt="" />
                                </div>
                                <div className='HiringProcess-sub-image-content'>
                                    <h3>03</h3>
                                    <p>Interview Result info via Phone / Mail</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HiringProcess