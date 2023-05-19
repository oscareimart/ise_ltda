import React from "react"
import Link from "next/link"
import Slider from "react-slick"

import { env_values } from "@/settings/env"

const Hero1 = ({ dataBanner }) => {
	const props = {
		infinite: true,
		arrows: false,
		dots: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		slidesToScroll: 1,
		slidesToShow: 1,
	}
	return (
		<section
			id="home"
			className="main-slider-area bgc-black-with-lighting bgc-success rel z-1"
		>
			<Slider {...props} className="main-slider-active">
				{dataBanner?.attributes?.banners?.data?.map((row, i) => (
					<div className="slider-item" key={i}>
						<div className="container">
							<div className="slider-content">
								<span className="sub-title">
									{row.attributes?.subtitulo || ""}
								</span>
								<h1>{row.attributes?.titulo || ""}</h1>
							</div>
						</div>
						<div
							className="slider-video"
							style={{
								backgroundImage: `url(${env_values.API_URL}${row.attributes?.imagen?.data?.attributes?.url})`,
							}}
						>
							{row.attributes?.url_video && (
								<Link
									href={`https://${row.attributes?.url_video}?autoplay=1`}
									// href="https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1"
									// // href="https://www.youtube.com/watch?v=DmAXxUAx7Jw"
									className="mfp-iframe video-play"
								>
									<i className="fas fa-play" />
								</Link>
							)}

							<span className="video-title cd-headline clip">
								<span className="cd-words-wrapper">
									<b>Development</b>
								</span>
							</span>
						</div>
					</div>
				))}
				{/* <div className="slider-item">
					<div className="container">
						<div className="slider-content">
							<span className="sub-title">
								25 Years of Experience in web design solutions
							</span>
							<h1>Digital web design solutions agency</h1>
							<div className="slider-btns">
								<Link href="/contact" className="theme-btn">
									Get Started Us{" "}
									<i className="fas fa-angle-double-right" />
								</Link>
								<Link
									href="/services"
									className="theme-btn style-three"
								>
									Explore Services{" "}
									<i className="fas fa-angle-double-right" />
								</Link>
							</div>
						</div>
					</div>
					<div
						className="slider-video"
						style={{
							backgroundImage:
								"url(assets/images/slider/slide1.jpg)",
						}}
					>
						<a
							href="https://www.youtube.com/watch?v=9Y7ma241N8k"
							className="mfp-iframe video-play"
						>
							<i className="fas fa-play" />
						</a>
						<span className="video-title cd-headline clip">
							<span className="cd-words-wrapper">
								<b className="is-visible">Web Design</b>
								<b>Development</b>
							</span>
						</span>
					</div>
				</div>
				<div className="slider-item">
					<div className="container">
						<div className="slider-content">
							<span className="sub-title">
								25 Years of Experience in web design solutions
							</span>
							<h1>Digital web design solutions agency</h1>
							<div className="slider-btns">
								<Link href="/contact" className="theme-btn">
									Get Started Us{" "}
									<i className="fas fa-angle-double-right" />
								</Link>
								<Link
									href="/services"
									className="theme-btn style-three"
								>
									Explore Services{" "}
									<i className="fas fa-angle-double-right" />
								</Link>
							</div>
						</div>
					</div>
					<div
						className="slider-video"
						style={{
							backgroundImage:
								"url(assets/images/slider/slide2.jpg)",
						}}
					>
						<a
							href="https://www.youtube.com/watch?v=9Y7ma241N8k"
							className="mfp-iframe video-play"
						>
							<i className="fas fa-play" />
						</a>
						<span className="video-title cd-headline clip">
							<span className="cd-words-wrapper">
								<b className="is-visible">Web Design</b>
								<b>Development</b>
							</span>
						</span>
					</div>
				</div> */}
			</Slider>
			<div className="container">
				<div className="main-slider-dots" />
			</div>
			<div className="slider-shapes">
				<img
					className="shape dots one"
					src="assets/images/shapes/slider-dots.png"
					alt="Shape"
				/>
				<img
					className="shape dots two"
					src="assets/images/shapes/slider-dots.png"
					alt="Shape"
				/>
				<img
					className="shape wave-line"
					src="assets/images/shapes/slider-wave-line.png"
					alt="Shape"
				/>
				<img
					className="shape circle"
					src="assets/images/shapes/slider-circle.png"
					alt="Shape"
				/>
			</div>
		</section>
	)
}
export default Hero1
