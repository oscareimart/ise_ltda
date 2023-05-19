import React, { useState, useEffect } from 'react'
import Layout from "./../layout/Layout"
import Header from '@/components/blue_line/Header'
import Home from '@/components/blue_line/Home'
import MissionVision from '@/components/blue_line/MissionVision'
import Mark from '@/components/blue_line/Mark'
import Contact from '@/components/blue_line/Contact'

import * as consult from '@/services/ConsultServices'
import { env_values } from '@/settings/env'

const BlueLine = (props) => {

    const [dataBlueL, setDataBlueL] = useState({})
    const [strMisionVision, setStrMisionVision] = useState("")

    useEffect(() => {
        const getDataPage = async () => {
            try {
                const res = await consult.getAllData('paginass', {
                    populate: "deep"
                }, [{
                    type: 0,
                    name: "nombre",
                    value: "Linea%20Azul"
                }])
                console.log(res)
                if (res.status === 200) {
                    setDataBlueL(res.data?.data[0])
                    const regex = 'src="/uploads/'
                    const strContent = res.data?.data[0]?.attributes?.texto?.replaceAll(regex, `src="${env_values.API_URL}/uploads/`)
                    setStrMisionVision(strContent)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getDataPage()
    }, [])

    return (
        <>
            <Layout footer={2} noHeader>
                <Header />
                <Home
                    dataBlue={dataBlueL}
                />
                <Mark
                    dataBlue={dataBlueL}
                />
                <MissionVision
                    dataBlue={dataBlueL}
                    strMisionVision={strMisionVision}
                />
                <Contact />
            </Layout>
        </>
    )
}

export default BlueLine