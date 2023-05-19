import React, { Fragment, useEffect, useState } from "react"
import useClickOutside from "../useClickOutside"

const VideoPopup_ = (props) => {
	const { close, videoID } = props
	console.log(props)
	let domNode = useClickOutside(() => {
		close(false)
	})
	return (
		<Fragment>
			<div
				className="mfp-bg mfp-ready"
				onClick={() => close(false)}
			></div>
			<div
				className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
				tabIndex={-1}
				style={{ overflow: "hidden auto" }}
			>
				<div className="mfp-container mfp-s-ready mfp-iframe-holder">
					<div className="mfp-content" ref={domNode}>
						<div className="mfp-iframe-scaler">
							<button
								title="Close (Esc)"
								type="button"
								className="mfp-close"
								onClick={() => close()}
							>
								×
							</button>
							<iframe
								width="560"
								height="315"
								src={videoID}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
							{/* <iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/55Mvx6NWAu0"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe> */}
							{/* <iframe
								// src="https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe> */}
						</div>
					</div>
					<div className="mfp-preloader">Loading...</div>
				</div>
			</div>
		</Fragment>
	)
}

const VideoPopup = () => {
	const [video, setVideo] = useState(false)
	const [videoValue, setVideoValue] = useState(null)
	useEffect(() => {
		setTimeout(() => {
			const a = document.querySelectorAll("a")
			a.forEach((a) => {
				if (a.href.includes("https://www.youtube.com")) {
					a.addEventListener("click", (e) => {
						e.preventDefault()
						setVideoValue(a.href)
						setVideo(true)
					})
				}
			})
		}, 1000)
	}, [])
	return (
		<Fragment>
			{video && (
				<VideoPopup_
					close={() => setVideo(false)}
					videoID={videoValue}
				/>
			)}
		</Fragment>
	)
}

export default VideoPopup
