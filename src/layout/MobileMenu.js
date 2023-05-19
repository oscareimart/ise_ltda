import Link from "next/link"
import Image from "next/image"
import React, { useState, useContext } from "react"
import Accordion from "react-bootstrap/Accordion"
import { useAccordionButton } from "react-bootstrap/AccordionButton"
import LogoSimple from "./../../public/assets/images/logos/logo_simple.png"
import { menu } from "@/settings/menu"

function CustomToggle({ children, eventKey }) {
	const decoratedOnClick = useAccordionButton(eventKey, () =>
		console.log("totally custom!")
	)

	return (
		<button
			type="button"
			// style={{ backgroundColor: "pink" }}
			onClick={decoratedOnClick}
			className="navbar-toggle"
		>
			{children}
		</button>
	)
}

const MobileMenu = ({ logo }) => {
	const [activeMenu, setActiveMenu] = useState("")
	const [multiMenu, setMultiMenu] = useState("")
	const activeMenuSet = (value) =>
			setActiveMenu(activeMenu === value ? "" : value),
		activeLi = (value) =>
			value === activeMenu ? { display: "block" } : { display: "none" }
	const multiMenuSet = (value) =>
			setMultiMenu(multiMenu === value ? "" : value),
		multiMenuActiveLi = (value) =>
			value === multiMenu ? { display: "block" } : { display: "none" }
	return (
		<nav className="main-menu navbar-expand-lg d-block d-lg-none mobile-header">
			<Accordion defaultActiveKey="0">
				<div className="navbar-header">
					<div className="mobile-logo my-15">
						<Link href="/">
							<Image
								src={logo ? logo : LogoSimple}
								alt="Logo"
								title="Logo"
								width={50}
								height={55}
							/>
						</Link>
					</div>
					{/* Toggle Button */}
					<CustomToggle eventKey="1">
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</CustomToggle>
				</div>
				<Accordion.Collapse
					eventKey="1"
					// eventKey="nav"
					className="navbar-collapse clearfix"
				>
					<ul className="navigation clearfix">
						{menu?.map((row, i) => {
							if (row.children) {
								return (
									<li className="dropdown" key={i}>
										<a href={row.path}>{row.name || ""}</a>
										<ul style={activeLi(row.name)}>
											{row.children?.map((child, j) => (
												<li key={j}>
													<Link href={child.path}>
														{child.name || ""}
													</Link>
												</li>
											))}
										</ul>
										<div
											className="dropdown-btn"
											onClick={() =>
												activeMenuSet(row.name)
											}
										>
											<span className="fas fa-chevron-down" />
										</div>
									</li>
								)
							} else {
								return (
									<li key={i}>
										<Link href={row.path}>{row.name}</Link>
									</li>
								)
							}
						})}
						{/* <li className="dropdown">
							<a href="#">Home</a>
							<ul style={activeLi("home")}>
								<li className="dropdown">
									<a href="#">MultiPage</a>
									<ul style={multiMenuActiveLi("multiPage")}>
										<li>
											<Link href="/">Web Design</Link>
										</li>
										<li>
											<Link href="/index1dark">
												Web Design Dark
											</Link>
										</li>
										<li>
											<Link href="/index2">
												Front End Services
											</Link>
										</li>
										<li>
											<Link href="/index2dark">
												Front End Dark
											</Link>
										</li>
										<li>
											<Link href="/index3">
												Website Builder
											</Link>
										</li>
									</ul>
									<div
										className="dropdown-btn"
										onClick={() =>
											multiMenuSet("multiPage")
										}
									>
										<span className="fas fa-chevron-down" />
									</div>
								</li>
								<li className="dropdown">
									<a href="#">OnePage</a>
									<ul style={multiMenuActiveLi("onePage")}>
										<li>
											<Link href="/index1-onepage">
												Web Design
											</Link>
										</li>
										<li>
											<Link href="/index1dark-onepage">
												Web Design Dark
											</Link>
										</li>
										<li>
											<Link href="/index2-onepage">
												Front End Services
											</Link>
										</li>
										<li>
											<Link href="/index2dark-onepage">
												Front End Dark
											</Link>
										</li>
										<li>
											<Link href="/index3-onepage">
												Website Builder
											</Link>
										</li>
									</ul>
									<div
										className="dropdown-btn"
										onClick={() => multiMenuSet("onePage")}
									>
										<span className="fas fa-chevron-down" />
									</div>
								</li>
							</ul>
							<div
								className="dropdown-btn"
								onClick={() => activeMenuSet("home")}
							>
								<span className="fas fa-chevron-down" />
							</div>
						</li>
						<li className="dropdown">
							<a href="#">services</a>
							<ul style={activeLi("services")}>
								<li>
									<Link href="/services">
										Popular Services
									</Link>
								</li>
								<li>
									<Link href="/service-details">
										service details
									</Link>
								</li>
							</ul>
							<div
								className="dropdown-btn"
								onClick={() => activeMenuSet("services")}
							>
								<span className="fas fa-chevron-down" />
							</div>
						</li>
						<li className="dropdown">
							<a href="#">Project</a>
							<ul style={activeLi("Project")}>
								<li>
									<Link href="/projects">Project Grid</Link>
								</li>
								<li>
									<Link href="/project-creative">
										Project Creative
									</Link>
								</li>
								<li>
									<Link href="/project-carousel">
										Project Carousel
									</Link>
								</li>
								<li>
									<Link href="/project-details">
										Project Details
									</Link>
								</li>
							</ul>
							<div
								className="dropdown-btn"
								onClick={() => activeMenuSet("Project")}
							>
								<span className="fas fa-chevron-down" />
							</div>
						</li>
						<li className="dropdown">
							<a href="#">pages</a>
							<ul style={activeLi("pages")}>
								<li>
									<Link href="/about">About us</Link>
								</li>
								<li className="dropdown">
									<a href="#">Team</a>
									<ul style={multiMenuActiveLi("team")}>
										<li>
											<Link href="/team">
												Expert Team
											</Link>
										</li>
										<li>
											<Link href="/team-profile">
												Team Profile
											</Link>
										</li>
									</ul>
									<div
										className="dropdown-btn"
										onClick={() => multiMenuSet("team")}
									>
										<span className="fas fa-chevron-down" />
									</div>
								</li>
								<li>
									<Link href="/pricing">pricing plan</Link>
								</li>
								<li>
									<Link href="/faqs">faqs &amp; helf</Link>
								</li>
								<li>
									<Link href="/404">404 error</Link>
								</li>
							</ul>
							<div
								className="dropdown-btn"
								onClick={() => activeMenuSet("pages")}
							>
								<span className="fas fa-chevron-down" />
							</div>
						</li>
						<li className="dropdown">
							<a href="#">shop</a>
							<ul style={activeLi("shop")}>
								<li>
									<Link href="/shop">shop Grid</Link>
								</li>
								<li>
									<Link href="/product-details">
										Product details
									</Link>
								</li>
								<li>
									<Link href="/cart">cart page</Link>
								</li>
								<li>
									<Link href="/checkout">checkout</Link>
								</li>
							</ul>
							<div
								className="dropdown-btn"
								onClick={() => activeMenuSet("shop")}
							>
								<span className="fas fa-chevron-down" />
							</div>
						</li>
						<li className="dropdown">
							<a href="#">blog</a>
							<ul style={activeLi("blog")}>
								<li>
									<Link href="/blog">blog Grid</Link>
								</li>
								<li>
									<Link href="/blog-list">blog list</Link>
								</li>
								<li>
									<Link href="/blog-details">
										blog details
									</Link>
								</li>
							</ul>
							<div
								className="dropdown-btn"
								onClick={() => activeMenuSet("blog")}
							>
								<span className="fas fa-chevron-down" />
							</div>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li> */}
					</ul>
				</Accordion.Collapse>
			</Accordion>
		</nav>
	)
}
export default MobileMenu
