import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import React, { useState, useEffect, Fragment } from "react"

import Hero1 from "./../components/home1/Hero1"
import Layout from "./../layout/Layout"

import * as consult from "./../services/ConsultServices"
import { env_values } from "@/settings/env"

const Home = (props) => {
	const { companyData } = props
	const [dataBanners, setDataBanners] = useState({})
	const [contactForm, setContactForm] = useState({
		fullname: "",
		email: "",
		phone_number: "",
		message: "",
	})

	useEffect(() => {
		let isSubscribed = true
		const getMainData = async () => {
			try {
				// const res = await supabase
				// 	.from("pages")
				// 	.select("*, banner(*,banner_detail(*))")
				// 	.eq("name", "HOME")
				// console.log(res)}}
				const res = await consult.getAllData(
					"paginass",
					{
						populate: "deep",
					},
					[
						{
							type: 0,
							name: "nombre",
							value: "Home",
						},
					]
				)
				console.log(res)
				if (res.status === 200) {
					setDataBanners(res.data?.data[0])
				}
			} catch (error) {
				console.log(error)
			}
		}

		if (isSubscribed) {
			getMainData()
		}

		return () => {
			isSubscribed = false
		}
	}, [])

	const onChange = ({ name, value }) => {
		setContactForm({ ...contactForm, [name]: value })
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		if (contactForm.fullname && contactForm.email && contactForm.message) {
			const dataSend = {
				nombre: contactForm.fullname,
				correo: contactForm.email,
				mensaje: contactForm.message,
			}
			if (contactForm.phone_number)
				dataSend.telefono = contactForm.phone_number
			try {
				const res = await consult.postData("consultass", dataSend)
				console.log(res)
				if (res.status === 200) {
					cancelForm()
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	const cancelForm = () => {
		setContactForm({
			fullname: "",
			email: "",
			phone_number: "",
			message: "",
		})
	}

	return (
		<Fragment>
			<Head>
				{" "}
				<link
					rel="shortcut icon"
					href="assets/images/favicon.ico"
					type="image/x-icon"
				/>
			</Head>
			<Layout
				header={1}
				// className="home-one"
				footer={1}
			>
				{/*End Hidden Sidebar */}
				{/* Slider Section Start */}
				{dataBanners?.attributes?.banners?.data?.length > 0 && (
					<Hero1 dataBanner={dataBanners} />
				)}

				{/* Slider Section End */}
				{/* About Us Area start */}
				<section
					className="about-area-one pt-130 pb-125 rel z-1"
					id="about_us"
				>
					<div className="container">
						<div className="row justify-content-between align-items-center">
							<div className="col-lg-5">
								<div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
									{dataBanners.attributes?.nosotro?.data
										?.attributes?.imagen?.data?.attributes
										?.url && (
										<Image
											src={`${env_values.API_URL}${dataBanners.attributes?.nosotro?.data?.attributes?.imagen?.data?.attributes?.url}`}
											alt="About us"
											width={340}
											height={420}
										/>
									)}
									<img
										className="image-left"
										src="assets/images/shapes/image-left.png"
										alt="shape"
									/>
								</div>
							</div>
							<div className="col-xl-6 col-lg-7">
								<div className="about-content-one wow fadeInUp delay-0-4s">
									<div className="section-title mb-45">
										{/* <span className="sub-title mb-15">
											Acerca de Nosotros
										</span> */}
										<h2>Acerca de Nosotros</h2>
									</div>
									{/* <ul className="list-style-one">
										<li> */}
									<div
										className="content list-style-one"
										dangerouslySetInnerHTML={{
											__html: dataBanners.attributes
												?.nosotro?.data?.attributes
												?.mision,
										}}
									>
										{/* <h4>Misión de la Empresa</h4>
												<p>
													{dataBanners.attributes
														?.nosotro?.data
														?.attributes?.mision ||
														"S/N"}
												</p> */}
									</div>
									{/* </li> */}
									{/* <li>
											<div className="content">
												<h4>Visión de la Empresa</h4>
												<p>
													{dataBanners.attributes
														?.nosotro?.data
														?.attributes?.vision ||
														"S/N"}
												</p>
											</div>
										</li>
										<li>
											<div className="content">
												<h4>Nuestra Filosofía</h4>
												<p>
													{dataBanners.attributes
														?.nosotro?.data
														?.attributes
														?.filosofia || "S/N"}
												</p>
											</div>
										</li> */}
									{/* </ul> */}
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* About Us Area end */}
				{/* Design Featured Start */}
				<section
					className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1"
					id="lines"
				>
					<div className="container">
						<div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
							{/* <span className="sub-title mb-10">
								Core Design Featured
							</span> */}
							<h2>
								{
									dataBanners.attributes?.lineas?.data[0]
										?.attributes?.titulo
								}
							</h2>
						</div>
						<div className="row no-gap align-items-center">
							<div className="col-lg-3">
								<div className="feature-left">
									<div className="row">
										<div className="col-lg-12 col-sm-6">
											<div className="service-item style-three wow fadeInRight delay-0-2s">
												<div className="icon">
													<i className="flaticon-design" />
												</div>
												<div className="content">
													<h4>
														<Link href="/blue_line">
															Linea Azul
														</Link>
													</h4>
													<Link
														href="/blue_line"
														className="more-btn"
													>
														<i className="fal fa-long-arrow-right" />
													</Link>
												</div>
											</div>
										</div>
										{/* <div className="col-lg-12 col-sm-6">
											<div className="service-item style-three wow fadeInRight delay-0-3s">
												<div className="icon">
													<i className="flaticon-web-page" />
												</div>
												<div className="content">
													<h4>
														<Link href="/service-details">
															Website maintenance
															Services
														</Link>
													</h4>
													<Link
														href="/service-details"
														className="more-btn"
													>
														<i className="fal fa-long-arrow-right" />
													</Link>
												</div>
											</div>
										</div> */}
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="feature-middle rmt-30">
									<div className="image wow fadeInUp delay-0-2s">
										{/* <img
											className="circle-text"
											src="assets/images/shapes/feature-image-top.png"
											alt="Text"
										/> */}
										{dataBanners.attributes?.lineas?.data[0]
											?.attributes?.imagen?.data
											?.attributes?.url && (
											<img
												className="round"
												src={`${env_values.API_URL}${dataBanners.attributes?.lineas?.data[0]?.attributes?.imagen?.data?.attributes?.url}`}
												alt="Feature Middle"
											/>
										)}
									</div>
									{/* <div className="row">
										<div className="col-sm-6">
											<div className="service-item style-three wow fadeInUp delay-0-3s">
												<div className="icon">
													<i className="flaticon-online" />
												</div>
												<div className="content">
													<h4>
														<Link href="/service-details">
															eCommerce and
															product selling
														</Link>
													</h4>
													<Link
														href="/service-details"
														className="more-btn"
													>
														<i className="fal fa-long-arrow-right" />
													</Link>
												</div>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="service-item style-three mt-30 wow fadeInUp delay-0-4s">
												<div className="icon">
													<i className="flaticon-web-programming" />
												</div>
												<div className="content">
													<h4>
														<Link href="/service-details">
															Responsive websites
															(UI/UX) design
														</Link>
													</h4>
													<Link
														href="/service-details"
														className="more-btn"
													>
														<i className="fal fa-long-arrow-right" />
													</Link>
												</div>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-3">
								<div className="feature-right">
									<div className="row">
										<div className="col-lg-12 col-sm-6">
											<div className="service-item style-three mt-100 wow fadeInLeft delay-0-2s">
												<div className="icon">
													<i className="flaticon-graphic-design" />
												</div>
												<div className="content">
													<h4>
														<Link href="/green_line">
															Linea Verde
														</Link>
													</h4>
													<Link
														href="/green_line"
														className="more-btn"
													>
														<i className="fal fa-long-arrow-right" />
													</Link>
												</div>
											</div>
										</div>
										{/* <div className="col-lg-12 col-sm-6">
											<div className="service-item style-three wow fadeInLeft delay-0-3s">
												<div className="icon">
													<i className="flaticon-user-experience" />
												</div>
												<div className="content">
													<h4>
														<Link href="/service-details">
															User Experience and
															Design
														</Link>
													</h4>
													<Link
														href="/service-details"
														className="more-btn"
													>
														<i className="fal fa-long-arrow-right" />
													</Link>
												</div>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="design-feature-shapes">
						<img
							className="shape dots"
							src="assets/images/shapes/slider-dots.png"
							alt="Shape"
						/>
						<img
							className="shape wave-line"
							src="assets/images/shapes/feature-wave-line.png"
							alt="Shape"
						/>
					</div>
				</section>
				{/* Design Featured End */}
				{/* Contact Area Start */}
				{/* bgc-black-with-lighting */}
				<section
					className="contact-area overflow-hidden py-130 rel z-1"
					id="contact"
				>
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-xl-5 col-lg-6">
								<div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
									<div className="section-title mb-55">
										<h2 className="text-dark">
											¡Tienes un proyecto en mente!
											Sientete libre de contactar con
											nosotros.
										</h2>
									</div>
									<div className="contact-info-wrap">
										<div className="contact-info-item">
											<div className="icon">
												<i className="fal fa-map-marker-alt" />
											</div>
											<div className="content">
												<span className="title text-dark">
													Ubicación
												</span>
												<b className="text text-dark">
													{companyData?.attributes
														?.direccion || "S/N"}
												</b>
											</div>
										</div>
										<div className="contact-info-item">
											<div className="icon">
												<i className="far fa-envelope-open-text" />
											</div>
											<div className="content">
												<span className="title text-dark">
													Correo Electrónico
												</span>
												<b className="text">
													<a
														href="mailto:support@gmail.com"
														className="text-dark"
													>
														{companyData?.attributes
															?.correo ||
															"example@123.com"}
													</a>
												</b>
											</div>
										</div>
										<div className="contact-info-item">
											<div className="icon">
												<i className="far fa-phone" />
											</div>
											<div className="content">
												<span className="title text-dark">
													N° Telefono
												</span>
												<b className="text">
													<a
														href="callto:+000(123)45699"
														className="text-dark"
													>
														{companyData?.attributes
															?.telefono ||
															"00000000"}
													</a>
												</b>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-5 col-lg-6">
								<form
									onSubmit={(e) => onSubmit(e)}
									id="contact-area-form"
									className="contact-area-form text-center wow fadeInRight delay-0-2s"
									name="contact-area-form"
									action="#"
									method="post"
									style={{ backgroundColor: "#EBEBEB" }}
								>
									<h4>Contactanos</h4>
									<input
										type="text"
										id="full-name"
										name="fullname"
										className="form-control"
										defaultValue=""
										placeholder="Nombre Completo*"
										required
										onChange={(e) => onChange(e.target)}
										value={contactForm.fullname}
									/>
									<input
										type="email"
										id="blog-email"
										name="email"
										className="form-control"
										defaultValue=""
										placeholder="Correo Electrónico*"
										required
										onChange={(e) => onChange(e.target)}
										value={contactForm.email}
									/>
									<input
										type="text"
										id="phone_number"
										name="phone_number"
										className="form-control"
										defaultValue=""
										placeholder="Número de Teléfono"
										onChange={(e) => onChange(e.target)}
										value={contactForm.phone_number}
									/>
									<textarea
										name="message"
										id="message"
										className="form-control"
										rows={5}
										placeholder="Escribe un Mensaje*"
										required
										defaultValue={""}
										onChange={(e) => onChange(e.target)}
										value={contactForm.message}
									/>
									<button type="submit" className="theme-btn">
										Enviar Mensaje{" "}
										<i className="fas fa-angle-double-right" />
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className="contact-shapes">
						<img
							className="shape circle"
							src="assets/images/shapes/slider-dots.png"
							alt="Shape"
						/>
						<img
							className="shape dots"
							src="assets/images/shapes/contact-dots.png"
							alt="Shape"
						/>
						<img
							className="shape wave-line"
							src="assets/images/shapes/contact-wave-line.png"
							alt="Shape"
						/>
					</div>
				</section>
				{/* Contact Area End */}
			</Layout>
		</Fragment>
	)
}

// export function getServerSideProps() {}

export default Home
