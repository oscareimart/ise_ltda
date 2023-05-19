import React from "react"
import Isotope from "isotope-layout"
import Link from "next/link"
import { Fragment, useEffect, useRef, useState } from "react"

const ProjectGridIsotope = () => {
	// Isotope
	const isotope = useRef()
	const [filterKey, setFilterKey] = useState("*")
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope(".project-active", {
				itemSelector: ".item",
				//    layoutMode: "fitRows",
				percentPosition: true,
				masonry: {
					columnWidth: ".item",
				},
				animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false,
				},
			})
		}, 1000)
		//     return () => isotope.current.destroy();
	}, [])
	useEffect(() => {
		if (isotope.current) {
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` })
		}
	}, [filterKey])
	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key)
	}
	const activeBtn = (value) => (value === filterKey ? "current" : "")
	return (
		<Fragment>
			<div className="row justify-content-between align-items-end pb-30">
				<div className="col-xl-6">
					<div className="section-title mb-30 wow fadeInUp delay-0-2s">
						<span className="sub-title style-two mb-15">
							Pre-made Template
						</span>
						<h2>Let’s See Our Popular Website Template</h2>
					</div>
				</div>
				<div className="col-xl-6 text-xl-end">
					<ul className="project-filter filter-btns-one justify-content-center mb-30 wow fadeInUp delay-0-4s">
						<li
							data-filter="*"
							className={`c-pointer ${activeBtn("*")}`}
							onClick={handleFilterKeyChange("*")}
						>
							All
						</li>
						<li
							data-filter=".business"
							className={`c-pointer ${activeBtn("business")}`}
							onClick={handleFilterKeyChange("business")}
						>
							Business
						</li>
						<li
							className={`c-pointer ${activeBtn("saas")}`}
							onClick={handleFilterKeyChange("saas")}
							data-filter=".saas"
						>
							Saas
						</li>
						<li
							className={`c-pointer ${activeBtn("medical")}`}
							onClick={handleFilterKeyChange("medical")}
							data-filter=".medical"
						>
							Medical
						</li>
						<li
							className={`c-pointer ${activeBtn("construction")}`}
							onClick={handleFilterKeyChange("construction")}
							data-filter=".construction"
						>
							Construction
						</li>
						<li
							className={`c-pointer ${activeBtn("education")}`}
							onClick={handleFilterKeyChange("education")}
							data-filter=".education"
						>
							Education
						</li>
					</ul>
				</div>
			</div>
			<div className="row project-active justify-content-center">
				<div className="col-xl-4 col-md-6 item saas construction">
					<div className="project-item style-two wow fadeInUp delay-0-2s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two1.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Saas Landing PSD <br />
									Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item business medical education">
					<div className="project-item style-two wow fadeInUp delay-0-4s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two2.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Fintex- eWallet PSD <br />
									Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item business construction">
					<div className="project-item style-two wow fadeInUp delay-0-6s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two3.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Job Finding Mobile <br />
									Applications
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item business education">
					<div className="project-item style-two wow fadeInUp delay-0-2s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two7.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Oxence Website design <br />
									development Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item saas medical">
					<div className="project-item style-two wow fadeInUp delay-0-4s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two5.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content business">
							<h5>
								<Link href="project-details">
									Web Design Landing <br />
									PSD Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item saas construction education">
					<div className="project-item style-two wow fadeInUp delay-0-6s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two8.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Social Media Marketing <br />
									Web Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item saas construction">
					<div className="project-item style-two wow fadeInUp delay-0-2s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two9.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Oxence Website development <br />
									Services Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item business medical education">
					<div className="project-item style-two wow fadeInUp delay-0-4s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two10.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Becoach Education &amp; Coach <br />
									Web Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item business construction">
					<div className="project-item style-two wow fadeInUp delay-0-6s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two11.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									University College <br />
									Web Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item business education">
					<div className="project-item style-two wow fadeInUp delay-0-2s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two12.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Fintex Business Corporate <br />
									Website Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item saas medical">
					<div className="project-item style-two wow fadeInUp delay-0-4s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two13.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content business">
							<h5>
								<Link href="project-details">
									Doctio Medical Health <br />
									Website Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6 item saas construction education">
					<div className="project-item style-two wow fadeInUp delay-0-6s">
						<div className="project-iamge">
							<img
								src="assets/images/projects/project-two14.jpg"
								alt="Project"
							/>
							<div className="project-over">
								<Link
									href="/project-details"
									className="details-btn"
								>
									<i className="far fa-arrow-right" />
								</Link>
							</div>
						</div>
						<div className="project-content">
							<h5>
								<Link href="project-details">
									Dental Care Creative <br />
									Web Template
								</Link>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
export default ProjectGridIsotope
