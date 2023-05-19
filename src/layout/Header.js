import React from "react"
import Link from "next/link"
import Image from "next/image"
import { sideBarToggle } from "../utils"
import MobileMenu from "./MobileMenu"
import { menu } from "@/settings/menu"

import LogoDeskDefault from "./../../public/assets/images/logos/Ltda_gris.png"
import LogoSimple from "./../../public/assets/images/logos/logo_simple.png"

const Header = ({ header }) => {
	switch (header) {
		case 1:
			return <Header1 />
		case 2:
			return <Header2 />
		default:
			return <DefaultHeader />
	}
}
export default Header

const Header1 = () => {
	return (
		<header className="main-header header-two">
			{/*Header-Upper*/}
			<div className="header-upper">
				<div className="container clearfix">
					<div className="header-inner rel d-flex align-items-center">
						<div className="logo-outer">
							<div className="logo">
								<Link href="/">
									<img
										src="assets/images/logos/Ltda_gris.png"
										alt="Logo"
										title="Logo"
										width={178}
									/>
								</Link>
							</div>
						</div>
						<div className="nav-outer clearfix">
							<MobileMenu logo={LogoSimple} />
							{/* Main Menu */}
							<nav className="main-menu d-none d-lg-block navbar-expand-lg">
								<div className="navbar-header">
									<div className="mobile-logo my-10">
										<Link href="/">
											<img
												src="assets/images/logos/logo-two.png"
												alt="Logo"
												title="Logo"
											/>
										</Link>
									</div>
									{/* Toggle Button */}
									<button
										type="button"
										className="navbar-toggle"
										data-bs-toggle="collapse"
										data-bs-target=".navbar-collapse"
									>
										<span className="icon-bar" />
										<span className="icon-bar" />
										<span className="icon-bar" />
									</button>
								</div>
								<div className="navbar-collapse collapse clearfix">
									<Menu />
								</div>
							</nav>
							{/* Main Menu End*/}
						</div>
						{/* Nav Search */}
						{/* <div className="nav-search py-15">
							<button className="far fa-search" />
							<form
								onSubmit={(e) => e.preventDefault()}
								action="#"
								className="hide"
							>
								<input
									type="text"
									placeholder="Search"
									className="searchbox"
									required=""
								/>
								<button
									type="submit"
									className="searchbutton far fa-search"
								/>
							</form>
						</div> */}

						{/* Menu Button */}
						{/* <div className="menu-btns"> */}
						{/* <Link
								href="/contact"
								className="theme-btn style-three"
							>
								Get a Quote{" "}
								<i className="fas fa-angle-double-right" />
							</Link> */}
						{/* menu sidbar */}
						{/* <div className="menu-sidebar d-none d-lg-block">
								<button onClick={() => sideBarToggle()}>
									<span className="icon-bar" />
									<span className="icon-bar" />
									<span className="icon-bar" />
								</button>
							</div> */}
						{/* </div> */}
					</div>
				</div>
			</div>
			{/*End Header Upper*/}
		</header>
	)
}

const Header2 = () => {
	return (
		<header className="main-header">
			<div className="header-top-wrap bgc-secondary text-white py-5">
				<div className="container">
					<div className="header-top">
						<div className="row align-items-center">
							<div className="col-lg-4">
								<div className="top-left text-center text-lg-start">
									<ul>
										<li>
											<a href="#">About</a>
										</li>
										<li>
											<a href="#">Services</a>
										</li>
										<li>
											<a href="#">Faqs</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="top-right text-center text-lg-end">
									<ul>
										<li>
											<i className="far fa-envelope" />{" "}
											<a href="mailto:support@gmail.com">
												support@gmail.com
											</a>
										</li>
										<li>
											<i className="far fa-phone" />{" "}
											<a href="callto:+000(123)45699">
												+000 (123) 456 99
											</a>
										</li>
										<li>
											<select
												className="select"
												name="language"
												id="language"
											>
												<option value="English">
													English
												</option>
												<option value="Bengali">
													Bengali
												</option>
												<option value="Arabic">
													Arabic
												</option>
											</select>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*Header-Upper*/}
			<div className="header-upper">
				<div className="container clearfix">
					<div className="header-inner rel d-flex align-items-center">
						<div className="logo-outer">
							<div className="logo">
								<Link href="/">
									<img
										src="assets/images/logos/logo.png"
										alt="Logo"
										title="Logo"
										className="logo dark-logo"
									/>
									<img
										className="light-logo logo"
										src="assets/images/logos/logo-white.png"
										alt="Logo"
										title="Logo"
									/>
								</Link>
							</div>
						</div>
						<div className="nav-outer clearfix">
							<MobileMenu />
							{/* Main Menu */}
							<nav className="main-menu d-none d-lg-block navbar-expand-lg">
								<div className="navbar-header">
									<div className="mobile-logo my-15">
										<Link href="/">
											<img
												src="assets/images/logos/logo.png"
												alt="Logo"
												title="Logo"
											/>
										</Link>
									</div>
									{/* Toggle Button */}
									<button
										type="button"
										className="navbar-toggle"
										data-bs-toggle="collapse"
										data-bs-target=".navbar-collapse"
									>
										<span className="icon-bar" />
										<span className="icon-bar" />
										<span className="icon-bar" />
									</button>
								</div>
								<div className="navbar-collapse collapse clearfix">
									<Menu />
								</div>
							</nav>
							{/* Main Menu End*/}
						</div>
						{/* Nav Search */}
						<div className="nav-search py-15">
							<button className="far fa-search" />
							<form
								onSubmit={(e) => e.preventDefault()}
								action="#"
								className="hide"
							>
								<input
									type="text"
									placeholder="Search"
									className="searchbox"
									required=""
								/>
								<button
									type="submit"
									className="searchbutton far fa-search"
								/>
							</form>
						</div>
						{/* Menu Button */}
						<div className="menu-btns">
							<Link href="/contact" className="theme-btn">
								Download Now{" "}
								<i className="fas fa-angle-double-right" />
							</Link>
							{/* menu sidbar */}
							<div className="menu-sidebar d-none d-lg-block">
								<button onClick={() => sideBarToggle()}>
									<span className="icon-bar" />
									<span className="icon-bar" />
									<span className="icon-bar" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*End Header Upper*/}
		</header>
	)
}

const DefaultHeader = () => {
	return (
		<header className="main-header header-three menu-absolute">
			{/*Header-Upper*/}
			<div className="header-upper">
				<div className="container-fluid clearfix">
					<div className="header-inner rel d-flex align-items-center">
						<div className="logo-outer">
							<div className="logo">
								<Link href="/">
									<Image
										src={LogoDeskDefault}
										alt="Logo"
										title="Logo"
										width={178}
										height={113}
									/>
								</Link>
							</div>
						</div>
						<div className="nav-outer clearfix">
							<MobileMenu />
							{/* Main Menu */}
							<nav className="main-menu d-none d-lg-block navbar-expand-lg">
								<div className="navbar-header">
									<div className="mobile-logo my-15">
										<Link href="/">
											<Image
												src={LogoSimple}
												alt="Logo"
												title="Logo"
												width={50}
												height={55}
											/>
										</Link>
									</div>
									{/* Toggle Button */}
									<button
										type="button"
										className="navbar-toggle"
										data-bs-toggle="collapse"
										data-bs-target=".navbar-collapse"
									>
										<span className="icon-bar" />
										<span className="icon-bar" />
										<span className="icon-bar" />
									</button>
								</div>
								<div className="navbar-collapse collapse clearfix">
									<Menu />
								</div>
							</nav>
							{/* Main Menu End*/}
						</div>
						{/* Menu Button */}
						{/* <div className="menu-btns">
							<Link href="/contact" className="login">
								Log in
							</Link>
							<Link href="/contact" className="theme-btn">
								Sign up Free{" "}
								<i className="fas fa-angle-double-right" />
							</Link>
						</div> */}
					</div>
				</div>
			</div>
			{/*End Header Upper*/}
		</header>
	)
}

const Menu = () => {
	return (
		<ul className="navigation clearfix">
			{menu?.map((row, i) => {
				if (row.children) {
					return (
						<li className="dropdown" key={i}>
							<a href={row.path}>{row.name || ""}</a>
							<ul style={{ marginTop: "-20px" }}>
								{row.children?.map((child, j) => (
									<li key={j}>
										<Link href={child.path}>
											{child.name}
										</Link>
									</li>
								))}
							</ul>
							<div className="dropdown-btn">
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
				<ul>
					<li className="dropdown">
						<a href="#">MultiPage</a>
						<ul>
							<li>
								<Link href="/">Web Design</Link>
							</li>
							<li>
								<Link href="/index1dark">Web Design Dark</Link>
							</li>
							<li>
								<Link href="/index2">Front End Services</Link>
							</li>
							<li>
								<Link href="/index2dark">Front End Dark</Link>
							</li>
							<li>
								<Link href="/index3">Website Builder</Link>
							</li>
						</ul>
						<div className="dropdown-btn">
							<span className="fas fa-chevron-down" />
						</div>
					</li>
					<li className="dropdown">
						<a href="#">OnePage</a>
						<ul>
							<li>
								<Link href="/index1-onepage">Web Design</Link>
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
						<div className="dropdown-btn">
							<span className="fas fa-chevron-down" />
						</div>
					</li>
				</ul>
				<div className="dropdown-btn">
					<span className="fas fa-chevron-down" />
				</div>
			</li>
			<li className="dropdown">
				<a href="#">services</a>
				<ul>
					<li>
						<Link href="/services">Popular Services</Link>
					</li>
					<li>
						<Link href="/service-details">service details</Link>
					</li>
				</ul>
				<div className="dropdown-btn">
					<span className="fas fa-chevron-down" />
				</div>
			</li>
			<li className="dropdown">
				<a href="#">Project</a>
				<ul>
					<li>
						<Link href="/projects">Project Grid</Link>
					</li>
					<li>
						<Link href="/project-creative">Project Creative</Link>
					</li>
					<li>
						<Link href="/project-carousel">Project Carousel</Link>
					</li>
					<li>
						<Link href="/project-details">Project Details</Link>
					</li>
				</ul>
				<div className="dropdown-btn">
					<span className="fas fa-chevron-down" />
				</div>
			</li>
			<li className="dropdown">
				<a href="#">pages</a>
				<ul>
					<li>
						<Link href="/about">About us</Link>
					</li>
					<li className="dropdown">
						<a href="#">Team</a>
						<ul>
							<li>
								<Link href="/team">Expert Team</Link>
							</li>
							<li>
								<Link href="/team-profile">Team Profile</Link>
							</li>
						</ul>
						<div className="dropdown-btn">
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
				<div className="dropdown-btn">
					<span className="fas fa-chevron-down" />
				</div>
			</li>
			<li className="dropdown">
				<a href="#">shop</a>
				<ul>
					<li>
						<Link href="/shop">shop Grid</Link>
					</li>
					<li>
						<Link href="/product-details">Product details</Link>
					</li>
					<li>
						<Link href="/cart">cart page</Link>
					</li>
					<li>
						<Link href="/checkout">checkout</Link>
					</li>
				</ul>
				<div className="dropdown-btn">
					<span className="fas fa-chevron-down" />
				</div>
			</li>
			<li className="dropdown">
				<a href="#">blog</a>
				<ul>
					<li>
						<Link href="/blog">blog Grid</Link>
					</li>
					<li>
						<Link href="/blog-list">blog list</Link>
					</li>
					<li>
						<Link href="/blog-details">blog details</Link>
					</li>
				</ul>
				<div className="dropdown-btn">
					<span className="fas fa-chevron-down" />
				</div>
			</li>
			<li>
				<Link href="/contact">Contact</Link>
			</li> */}
		</ul>
	)
}
