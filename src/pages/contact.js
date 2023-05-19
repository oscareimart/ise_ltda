import React, { useState, useEffect } from "react"
import Layout from "./../layout/Layout"
import PageBanner from "./../layout/PageBanner"
import * as consult from "@/services/ConsultServices"
import Link from "next/link"

const Contact = (props) => {
	const { companyData } = props
	console.log(companyData)
	const [contactForm, setContactForm] = useState({
		fullname: "",
		email: "",
		phone_number: "",
		message: "",
	})

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
				console.log(contactForm)
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
		<Layout footer={3}>
			<PageBanner
				titleHtml={`Contacta con <span>Nosotros</span>`}
				titleText="Contáctanos"
			/>
			<section className="contact-us-page-area py-130">
				<div className="container">
					<div className="row align-items-end justify-content-between">
						<div className="col-lg-7">
							<div className="contact-content rmb-65 wow fadeInRight delay-0-2s">
								<div className="section-title mb-25">
									<span className="sub-title style-two mb-15">
										Contáctanos
									</span>
									<h2>
										Iniciemos un nuevo trabajo o proyecto
										juntos! Contacta con nosotros
									</h2>
								</div>
								<p>
									Sed ut perspiciatis unde omnis iste natus
									error sit voluptatem accusantium doloremque
									lauda tiumes totam rem aperiam, eaque ipsa
									quae ab illo inventore veritatis et quasi
									architecto
								</p>
								<form
									onSubmit={(e) => onSubmit(e)}
									id="contactForm"
									className="contactForm z-1 rel"
								>
									<div className="row pt-15">
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="name">
													Nombre Completo*
												</label>
												<input
													type="text"
													id="name"
													name="fullname"
													className="form-control"
													defaultValue=""
													placeholder="Michael C. Coleman"
													required
													data-error="Por Favor ingresa tu nombre"
													onChange={(e) =>
														onChange(e.target)
													}
													value={contactForm.fullname}
												/>
												<div className="help-block with-errors" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="email">
													Correo Electrónico*
												</label>
												<input
													type="email"
													id="email"
													name="email"
													className="form-control"
													defaultValue=""
													placeholder="support@gmail.com"
													required
													data-error="Por favor ingresa tu correo"
													onChange={(e) =>
														onChange(e.target)
													}
													value={contactForm.email}
												/>
												<div className="help-block with-errors" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="phone_number">
													Número de Telefono
												</label>
												<input
													type="text"
													id="phone_number"
													name="phone_number"
													className="form-control"
													defaultValue=""
													placeholder="+000 (123) 456 88"
													onChange={(e) =>
														onChange(e.target)
													}
													value={
														contactForm.phone_number
													}
												/>
											</div>
										</div>
										{/* <div className="col-md-6">
											<div className="form-group">
												<label htmlFor="select_subject">
													Select Requirments
												</label>
												<select
													name="select_subject"
													id="select_subject"
												>
													<option
														value="default"
														selected=""
													>
														Website customize
													</option>
													<option value="Design">
														Design
													</option>
													<option value="Development">
														Development
													</option>
													<option value="SEO">
														SEO
													</option>
												</select>
											</div>
										</div> */}
										<div className="col-md-12">
											<div className="form-group">
												<label htmlFor="message">
													Escribe un Mensaje*
												</label>
												<textarea
													name="message"
													id="message"
													className="form-control"
													rows={4}
													placeholder="Write Message"
													required
													data-error="Por favor escribe un mensaje"
													defaultValue={""}
													onChange={(e) =>
														onChange(e.target)
													}
													value={contactForm.message}
												/>
												<div className="help-block with-errors" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group pt-5 mb-0">
												<button
													type="submit"
													className="theme-btn w-100"
												>
													Enviar Mensaje{" "}
													<i className="fas fa-angle-double-right" />
												</button>
												<div
													id="msgSubmit"
													className="hidden"
												/>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5">
							<div className="contact-info wow fadeInLeft delay-0-2s">
								<div className="contact-info-item style-two">
									<div className="icon">
										<i className="fal fa-map-marker-alt" />
									</div>
									<div className="content">
										<span className="title">Ubicación</span>
										<span className="text">
											{companyData?.attributes
												?.direccion || ""}
										</span>
									</div>
								</div>
								<div className="contact-info-item style-two">
									<div className="icon">
										<i className="far fa-envelope-open-text" />
									</div>
									<div className="content">
										<span className="title">
											Correo Electrónico
										</span>
										<span className="text">
											<a href="mailto:support@gmail.com">
												{companyData?.attributes
													?.correo ||
													"supportweb@gmail.com"}
											</a>
											{/* <br />
											<a href="mailto:websitebuilding.net">
												websitebuilding.net
											</a> */}
										</span>
									</div>
								</div>
								<div className="contact-info-item style-two">
									<div className="icon">
										<i className="far fa-phone" />
									</div>
									<div className="content">
										<span className="title">
											Número de telefono
										</span>
										<span className="text">
											Llamar{" "}
											<a
												href={`calto:${companyData?.attributes?.telefono}`}
											>
												{companyData?.attributes
													?.telefono || "+00000000"}
											</a>
											{/* <br />
											Whatsapp : +9632145789 */}
										</span>
									</div>
								</div>
								<div className="follow-us">
									<h4>Sigue nuestras redes</h4>
									<div className="social-style-two">
										{companyData?.attributes?.redes_sociales?.data?.map(
											(row, i) => (
												<Link
													href={row.attributes?.url}
													key={i}
													target="_blank"
													rel="noopener noreferrer"
												>
													<i
														className={
															row.attributes
																?.icono
														}
													/>
												</Link>
											)
										)}
										{/* <a href="#">
											
										</a>
										<a href="#">
											<i className="fab fa-twitter" />
										</a>
										<a href="#">
											<i className="fab fa-linkedin-in" />
										</a>
										<a href="#">
											<i className="fab fa-behance" />
										</a> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Contact Us Page Area end */}
			{/* Our Location Address Area start */}
			<section className="our-location-address-area rel z-1">
				<div className="container">
					<div className="row medium-gap justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="location-address-item wow fadeInUp delay-0-2s">
								<div className="top-part">
									<img
										src="assets/images/contact/location1.png"
										alt="Location"
									/>
									<h5>New York</h5>
								</div>
								<div className="bottom-part">
									<ul>
										<li>
											<i className="fal fa-map-marker-alt" />{" "}
											{companyData?.attributes
												?.direccion || "S/N"}
										</li>
										<li>
											<i className="far fa-envelope-open-text" />{" "}
											{companyData?.attributes?.correo ||
												"example@example.com"}
										</li>
										<li>
											<i className="far fa-phone" />{" "}
											{companyData?.attributes
												?.telefono || "+0000000"}
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <div className="col-lg-4 col-md-6">
							<div className="location-address-item wow fadeInUp delay-0-4s">
								<div className="top-part">
									<img
										src="assets/images/contact/location2.png"
										alt="Location"
									/>
									<h5>Australia Capital</h5>
								</div>
								<div className="bottom-part">
									<ul>
										<li>
											<i className="fal fa-map-marker-alt" />{" "}
											55 Main Street, New York
										</li>
										<li>
											<i className="far fa-envelope-open-text" />{" "}
											support@gmail.com
										</li>
										<li>
											<i className="far fa-phone" /> +000
											(123) 456 88
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="location-address-item wow fadeInUp delay-0-6s">
								<div className="top-part">
									<img
										src="assets/images/contact/location3.png"
										alt="Location"
									/>
									<h5>South Africa</h5>
								</div>
								<div className="bottom-part">
									<ul>
										<li>
											<i className="fal fa-map-marker-alt" />{" "}
											55 Main Street, New York
										</li>
										<li>
											<i className="far fa-envelope-open-text" />{" "}
											support@gmail.com
										</li>
										<li>
											<i className="far fa-phone" /> +000
											(123) 456 88
										</li>
									</ul>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
			{/* Our Location Address Area end */}
			{/* Location Map Area Start */}
			<div className="contact-page-map wow fadeInUp delay-0-2s">
				<div className="our-location">
					<iframe
						// src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
						src={companyData?.attributes?.url_maps}
						style={{ border: 0, width: "100%" }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
			{/* Location Map Area End */}
		</Layout>
	)
}
export default Contact
