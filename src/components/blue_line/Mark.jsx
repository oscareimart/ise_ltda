import { env_values } from '@/settings/env'
import React, { useState, useEffect } from 'react'

const Mark = (props) => {
    const { dataBlue } = props
    console.log(dataBlue)
    return (
        <>
            <section id='mark' className="features-area pb-100 pt-80 rel z-1">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <span className="sub-title mb-15">
                            Nuestras Marcas
                        </span>
                        <h2>Marcas</h2>
                    </div>
                    <div className="row row-cols-xl-7 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 justify-content-center">
                        {
                            dataBlue?.attributes?.marcas?.data?.length > 0 && dataBlue?.attributes?.marcas?.data?.map((row, i) => (
                                <div className="col" key={i}>
                                    <div className="feature-item wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img
                                                src={`${env_values.API_URL}${row.attributes?.logo?.data?.attributes?.url}`}
                                                alt="Logo"
                                            />
                                        </div>
                                        <h5>{row.attributes?.nombre || "S/N"}</h5>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="col">
                            <div className="feature-item wow fadeInDown delay-0-2s">
                                <div className="image">
                                    <img
                                        src="assets/images/features/logo2.png"
                                        alt="Logo"
                                    />
                                </div>
                                <h5>HTML</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item wow fadeInUp delay-0-2s">
                                <div className="image">
                                    <img
                                        src="assets/images/features/logo3.png"
                                        alt="Logo"
                                    />
                                </div>
                                <h5>CSS</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item wow fadeInDown delay-0-2s">
                                <div className="image">
                                    <img
                                        src="assets/images/features/logo4.png"
                                        alt="Logo"
                                    />
                                </div>
                                <h5>JS</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item wow fadeInUp delay-0-2s">
                                <div className="image">
                                    <img
                                        src="assets/images/features/logo5.png"
                                        alt="Logo"
                                    />
                                </div>
                                <h5>Angular</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item wow fadeInDown delay-0-2s">
                                <div className="image">
                                    <img
                                        src="assets/images/features/logo6.png"
                                        alt="Logo"
                                    />
                                </div>
                                <h5>React JS</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-item wow fadeInUp delay-0-2s">
                                <div className="image">
                                    <img
                                        src="assets/images/features/logo7.png"
                                        alt="Logo"
                                    />
                                </div>
                                <h5>Gulp.js</h5>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mark