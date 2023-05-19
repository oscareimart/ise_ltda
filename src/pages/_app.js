import Head from "next/head"
import React, { useState, useEffect, Fragment } from "react"

import "./../../public/assets/css/fontawesome-5.14.0.min.css"
import "./../../public/assets/css/bootstrap.min.css"
import "./../../public/assets/css/magnific-popup.min.css"
import "./../../public/assets/css/nice-select.min.css"
import "./../../public/assets/css/jquery.animatedheadline.css"
import "./../../public/assets/css/animate.min.css"
import "./../../public/assets/css/slick.min.css"
import "./../../public/assets/css/style.css"
// import "bootstrap/dist/css/bootstrap.min.css"

import PreLoader from "./../layout/PreLoader"
import "@/styles/globals.css"
import { NextUIProvider, useSSR } from "@nextui-org/react"

import * as consult from "@/services/ConsultServices"

function App({ Component, pageProps, companyData }) {
	pageProps = { ...pageProps, companyData }
	const { isBrowser } = useSSR()
	const [load, setLoad] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoad(false)
		}, 1000)
	}, [])

	return (
		<Fragment>
			{isBrowser && (
				<NextUIProvider>
					<Head>
						<title>
							ISE | Importaciones, Salud & Entretenimiento Ltda.
						</title>
						<link
							rel="shortcut icon"
							href="assets/images/favicon.ico"
							type="image/x-icon"
						/>
						<link
							rel="stylesheet"
							href="assets/css/flaticon.min.css"
						/>

						<link
							href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap"
							rel="stylesheet"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Kumbh+Sans:wght@400;500;700&family=Shadows+Into+Light&display=swap"
							rel="stylesheet"
						/>

						{/* Font Awesome */}
						{/* <link
							rel="stylesheet"
							href="assets/css/fontawesome-5.14.0.min.css"
						/> */}
						{/* Bootstrap */}
						{/* <link
							rel="stylesheet"
							href="assets/css/bootstrap.min.css"
						/> */}
						{/* Magnific Popup */}
						{/* <link
							rel="stylesheet"
							href="assets/css/magnific-popup.min.css"
						/> */}
						{/* Nice Select */}
						{/* <link
							rel="stylesheet"
							href="assets/css/nice-select.min.css"
						/> */}
						{/* Type Writer */}
						{/* <link
							rel="stylesheet"
							href="assets/css/jquery.animatedheadline.css"
						/> */}
						{/* Animate */}
						{/* <link
							rel="stylesheet"
							href="assets/css/animate.min.css"
						/> */}
						{/* Slick */}
						{/* <link
							rel="stylesheet"
							href="assets/css/slick.min.css"
						/> */}
						{/* Main Style */}
						{/* <link rel="stylesheet" href="assets/css/style.css" /> */}
					</Head>
					{load && <PreLoader />}
					<Component {...pageProps} />
				</NextUIProvider>
			)}
		</Fragment>
	)
}

App.getInitialProps = async (ctx) => {
	let res = {}
	try {
		res = await consult.getAllData("empresa")
		// console.log(res.data)
	} catch (error) {
		console.log(error)
		res = {}
	}
	return { companyData: res?.data?.data || {} }
}

export default App
