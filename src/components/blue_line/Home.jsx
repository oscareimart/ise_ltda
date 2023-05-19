import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { env_values } from '@/settings/env'

const Home = (props) => {
    const { dataBlue = {} } = props
    return (
        <>
            <section id="home" className="hero-area bgc-dark-blue rel z-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 align-self-center">
                            <div className="hero-content text-white my-120 rmb-0 wow fadeInLeft delay-0-2s">
                                {/* <span className="sub-title mb-35">
                                    25 Years of Experience in web design
                                    solutions
                                </span> */}
                                <h1>{dataBlue?.attributes?.banners?.data[0]?.attributes?.titulo || "S/N"}</h1>
                                <p>
                                    {dataBlue?.attributes?.banners?.data[0]?.attributes?.subtitulo || "S/N"}
                                </p>
                                {/* <div className="hero-btns pt-10">
                                    <Link
                                        href="/about"
                                        className="theme-btn mt-15"
                                    >
                                        Discover More{" "}
                                        <i className="fas fa-angle-double-right" />
                                    </Link>
                                    <a
                                        href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                        className="mfp-iframe video-play-text mt-15"
                                    >
                                        <i className="fas fa-play" />{" "}
                                        <span>How IT Works</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="hero-images mt-75 wow fadeInRight delay-0-2s">
                                <img
                                    src={`${env_values.API_URL}${dataBlue?.attributes?.banners?.data[0]?.attributes?.imagen?.data?.attributes?.url}`}
                                    alt="Hero"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave-shapes">
                    <img
                        className="shape one"
                        src="assets/images/shapes/hero1.png"
                        alt="Wave Shape"
                    />
                    <img
                        className="shape two"
                        src="assets/images/shapes/hero2.png"
                        alt="Wave Shape"
                    />
                </div>
            </section>
        </>
    )
}

export default Home