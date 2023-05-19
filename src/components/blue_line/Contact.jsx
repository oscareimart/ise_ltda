import React, { useState, useEffect } from 'react'

import * as consult from '@/services/ConsultServices'

const Contact = () => {
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
        // console.log(contactForm)
        if (contactForm.email && contactForm.fullname && contactForm.message) {
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
        <>
            <div className="container mb-35">
                <div
                    id="contact"
                    className="bgc-primary p-80"
                    style={{
                        backgroundImage:
                            "url(assets/images/footer/newsletter-bg.png)",
                    }}
                >
                    <div className="section-title mb-55">
                        <h2 className="text-light">
                            Contacta con Nosotros
                            {/* <span>say hello</span> */}
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form
                                onSubmit={(e) => onSubmit(e)}
                                className="d-block contact-area-form text-center wow fadeInRight delay-0-2s"
                            >
                                <h4 className="text-dark">Contactanos</h4>
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
                                    placeholder="Número de telefono"
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
                    <div className="row justify-content-between align-items-center contact-area">
                        {/* <div className="col-xl-6 col-lg-7">
						<div className="footer-newsletter-content rmb-55 wow fadeInLeft delay-0-2s"> */}
                        {/* <div className="section-title mb-30">
								<span className="sub-title mb-15">
									Our Newsletter
								</span>
								<h2>
									Subscribe Our Newsletter to Get More Updates
								</h2>
								<p>
									Consectetur adipiscing eiusmod tempor
									incididunt labore et dolores magna aliquae
									suspendisse ultrices gravid commodo viverra
								</p>
							</div> */}
                        {/* <form
								onSubmit={(e) => e.preventDefault()}
								action="#"
							>
								<div className="form-group rel mb-0 w-100">
									<label htmlFor="email">
										<i className="far fa-envelope" />
									</label>
									<input
										type="email"
										id="email"
										placeholder="Email Address"
										required=""
									/>
								</div>
								<button className="theme-btn style-two">
									Subscribe{" "}
									<i className="fas fa-angle-double-right" />
								</button>
							</form> */}
                        {/* </div>
					</div> */}
                        {/* <div className="col-lg-5">
						<div className="footer-newsletter-image wow fadeInRight delay-0-2s">
							<img
								src="assets/images/footer/footer-newsletter.png"
								alt="Newsletter"
							/>
						</div>
					</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact