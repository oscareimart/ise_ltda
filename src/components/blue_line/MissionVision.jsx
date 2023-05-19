import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ModalAboutMore from './ModalAboutMore'

const MissionVision = (props) => {
    // console.log(props)
    const { dataBlue, strMisionVision } = props

    const [modalAbout, setModalAbout] = useState(false)
    return (
        <>
            <section className="mission-visson-area pb-130 rel z-1">
                <div className="container">
                    <div className="row large-gap align-items-center">
                        <div className="col-lg-12">
                            <div className="mission-visson-content rmb-65 wow fadeInUp delay-0-2s">
                                <div className="section-title mb-35">
                                    <span className="sub-title mb-15">
                                        Misión y Visión
                                    </span>
                                    {/* <h2>
                                        We aim to deliver quality creative
                                        solutions
                                    </h2>
                                    <p>
                                        Our web design company specializes the
                                        professional creation unique sites. Our
                                        team constantly monitors the emergence
                                        of new technologies that we are not
                                        afraid to implement in web projects
                                    </p> */}
                                    <div dangerouslySetInnerHTML={{ __html: strMisionVision }}></div>
                                </div>
                                <button
                                    type='button'
                                    className="theme-btn style-three"
                                    onClick={() => setModalAbout(!modalAbout)}
                                >
                                    Learn More About Us{" "}
                                    <i className="fas fa-angle-double-right" />
                                </button>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="mission-visson-image wow fadeInUp delay-0-4s">
                                <img
                                    src="assets/images/about/mission-visson.png"
                                    alt="About"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="wave-shapes">
                    <img
                        className="shape one"
                        src="assets/images/shapes/mission-vision1.png"
                        alt="Wave Shape"
                    />
                    <img
                        className="shape two"
                        src="assets/images/shapes/mission-vision2.png"
                        alt="Wave Shape"
                    />
                </div>
            </section>

            <ModalAboutMore
                modal={modalAbout}
                modalFunc={() => setModalAbout(!modalAbout)}
            />
        </>
    )
}

export default MissionVision