import React, { useState, useEffect } from 'react'
// import ShopIsotope from "../src/components/Isotope/shopIsotope";
import Layout from "@/layout/Layout"
import PageBanner from "@/layout/PageBanner"
import Header from '@/components/green_line/Header'

import dynamic from "next/dynamic"
import * as consult from '@/services/ConsultServices'

const ShopIsotope = dynamic(
    () => import("@/components/Isotope/ShopIsotope")
    // {
    //     ssr: false,
    // }
)

const GreenLine = () => {

    const [dataGreenL, setDataGreenL] = useState({})

    useEffect(() => {
        const getDataPage = async () => {
            try {
                const res = await consult.getAllData('paginass', {}, [{
                    type: 0,
                    name: "nombre",
                    value: "Linea%20Verde"
                }])
                console.log(res)
                if (res.status === 200) {
                    setDataGreenL(res.data?.data[0])
                }
            } catch (error) {
                console.log(error)
            }
        }

        getDataPage()
    }, []);

    return (
        <Layout footer={3} noHeader>
            <Header />
            <span id='home'></span>
            <PageBanner
                titleHtml={`Linea<span> Verde</span>`}
                titleText={dataGreenL?.attributes?.banners?.data[0]?.attributes?.titulo || "S/N"} />
            <section className="shop-page-area py-130 rel z-1">
                <div className="container">
                    <div className="row justify-content-center pb-20">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="section-title text-center mb-30 wow fadeInUp delay-0-2s">
                                <span className="sub-title style-two mb-15">
                                    {dataGreenL?.attributes?.nombre || "S/N"}
                                </span>
                                <h2>{dataGreenL?.attributes?.banners?.data[0]?.attributes?.subtitulo}</h2>
                            </div>
                        </div>
                    </div>
                    {/* Isotope */}
                    <span id="product"></span>
                    <ShopIsotope
                        dataGreen={dataGreenL}
                    />
                </div>
            </section>
            {/* Shop Page Area end */}
        </Layout>
    )
}
export default GreenLine