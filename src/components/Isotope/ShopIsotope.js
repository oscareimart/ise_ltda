import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from "react"
import * as consult from "@/services/ConsultServices"
import { env_values } from "@/settings/env"

import Pagination from "@mui/material/Pagination"
import { green } from "@mui/material/colors"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
	palette: {
		primary: {
			main: green[600],
		},
	},
})

const ShopIsotope = (props) => {
	if (typeof window === "undefined") {
		console.log("Pasa por el error en shop")
		const e = new error()
		e.name = "rendering suspense fallback..."
		delete e.stack
		throw e
	}
	// Isotope
	const { dataGreen } = props
	// console.log(dataGreen)

	const isotope = useRef()
	const [filterKey, setFilterKey] = useState("*")
	const [dataItems, setDataItems] = useState([])
	const [loadDataItems, setLoadDataItems] = useState(true)

	const [currentPage, setCurrentPage] = useState(1)

	const getDataProducts = async (strFilter = "") => {
		let queryCon = []
		if (strFilter) {
			queryCon.push({
				type: 1,
				name: "categoria_productos",
				field: "nombre",
				value: strFilter,
			})
		}
		try {
			const res = await consult.getAllData(
				"productoss",
				{
					paginate: {
						page: currentPage,
						pageSize: 10,
					},
				},
				queryCon
			)
			console.log(res)
			if (res.status === 200) {
				setDataItems(res.data)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		let isSubscribed = true

		const getDataItems = async () => {
			await getDataProducts()
			setLoadDataItems(false)
		}

		const getLibraryIso = async () => {
			const Isotope = (await import("isotope-layout")).default
			setTimeout(() => {
				isotope.current = new Isotope(".shop-active", {
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
		}

		if (isSubscribed) {
			setLoadDataItems(true)
			getDataItems()
			getLibraryIso()
		}

		return () => {
			isSubscribed = false
		}
		//     return () => isotope.current.destroy();
	}, [])

	useEffect(() => {
		const filterList = async () => {
			if (isotope.current) {
				filterKey === "*"
					? isotope.current.arrange({ filter: `*` })
					: isotope.current.arrange({ filter: `.${filterKey}` })
				// console.log(filterKey)
				if (filterKey === "*") {
					await getDataProducts()
				} else {
					await getDataProducts(filterKey)
				}
				isotope.current.reloadItems()
			}
			setLoadDataItems(false)
		}
		setLoadDataItems(true)
		filterList()
	}, [filterKey])

	useEffect(() => {
		const getDataPaginate = async () => {
			if (isotope.current) {
				if (filterKey === "*") {
					await getDataProducts()
				} else {
					await getDataProducts(filterKey)
				}
				isotope.current.reloadItems()
			}
			setLoadDataItems(false)
		}
		setLoadDataItems(true)
		getDataPaginate()
	}, [currentPage])

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key)
	}

	const onChangePaginate = (e, page) => {
		if (page) setCurrentPage(page)
	}

	const activeBtn = (value) => (value === filterKey ? "current" : "")

	return (
		<ThemeProvider theme={theme}>
			{loadDataItems ? (
				"Cargando..."
			) : (
				<Fragment>
					<ul className="shop-filter justify-content-center filter-btns-one mb-30 wow fadeInUp delay-0-4s">
						<li
							data-filter="*"
							className={`c-pointer ${activeBtn("*")}`}
							onClick={handleFilterKeyChange("*")}
						>
							Mostrar Todos
						</li>
						{dataGreen?.attributes?.categoria_productos?.data?.map(
							(row, i) => (
								<li
									className={`c-pointer ${activeBtn(
										row.attributes?.nombre
									)}`}
									onClick={handleFilterKeyChange(
										row.attributes?.nombre
									)}
									data-filter={`.${row.attributes?.nombre}`}
									key={i}
								>
									{row.attributes?.nombre || "S/N"}
								</li>
							)
						)}

						{/* <li
						className={`c-pointer ${activeBtn("plugin")}`}
						onClick={handleFilterKeyChange("plugin")}
						data-filter=".plugin"
					>
						Plugin
					</li>
					<li
						className={`c-pointer ${activeBtn("vectors")}`}
						onClick={handleFilterKeyChange("vectors")}
						data-filter=".vectors"
					>
						3D Vectors
					</li>
					<li
						className={`c-pointer ${activeBtn("ilustration")}`}
						onClick={handleFilterKeyChange("ilustration")}
						data-filter=".ilustration"
					>
						Ilustration
					</li>
					<li
						className={`c-pointer ${activeBtn("ui-kits")}`}
						onClick={handleFilterKeyChange("ui-kits")}
						data-filter=".ui-kits"
					>
						UI Kits
					</li>
					<li
						className={`c-pointer ${activeBtn("dashboard")}`}
						onClick={handleFilterKeyChange("dashboard")}
						data-filter=".dashboard"
					>
						Dashboard
					</li> */}
					</ul>
					<div className="row shop-active">
						{dataItems?.data?.map((row, i) => (
							<div
								className={`col-xl-4 col-md-6 item plugin ${row.attributes?.categoria_productos?.data?.map(
									(rowCat, i) =>
										`${rowCat.attributes?.nombre} `
								)}`}
								key={i}
							>
								<div className="product-item wow fadeInUp delay-0-2s">
									<div className="image">
										<Image
											src={`${env_values.API_URL}${row.attributes?.imagenes?.data[0]?.attributes?.url}`}
											alt={`Product${i}`}
											fill
										/>
									</div>
									<div className="content">
										<h5>{row.attributes?.nombre || ""}</h5>
										<div className="admin-ratting">
											{/* <span className="admin">
											By <a href="#">Webtend</a> in CMS
										</span> */}
											{/* <div className="ratting">
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star" />
											<i className="fas fa-star-half-alt" />
											<span>(8.5k )</span>
										</div> */}
										</div>
										<div className="price-details-btn">
											<span className="price">
												{row.attributes?.price || 0}
											</span>
											<Link
												href={`/product-details/${row.id}`}
												className="theme-btn"
											>
												Detalles{" "}
												<i className="fas fa-angle-double-right" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}

						{/* <div className="col-xl-4 col-md-6 item saas ui-kits">
						<div className="product-item wow fadeInUp delay-0-4s">
							<div className="image">
								<img
									src="assets/images/shop/product2.jpg"
									alt="Product"
								/>
							</div>
							<div className="content">
								<h5>ISOMetric Illustration</h5>
								<div className="admin-ratting">
									<span className="admin">
										By <a href="#">Webtend</a> in CMS
									</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star-half-alt" />
										<span>(8.5k )</span>
									</div>
								</div>
								<div className="price-details-btn">
									<span className="price">58.55</span>
									<Link
										href="/product-details"
										className="theme-btn"
									>
										Details{" "}
										<i className="fas fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 item vectors dashboard">
						<div className="product-item wow fadeInUp delay-0-6s">
							<div className="image">
								<img
									src="assets/images/shop/product3.jpg"
									alt="Product"
								/>
							</div>
							<div className="content">
								<h5>3D- Illustration For Crypto</h5>
								<div className="admin-ratting">
									<span className="admin">
										By <a href="#">Webtend</a> in CMS
									</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star-half-alt" />
										<span>(8.5k )</span>
									</div>
								</div>
								<div className="price-details-btn">
									<span className="price">37.55</span>
									<Link
										href="/product-details"
										className="theme-btn"
									>
										Details{" "}
										<i className="fas fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 item saas ilustration">
						<div className="product-item wow fadeInUp delay-0-2s">
							<div className="image">
								<img
									src="assets/images/shop/product4.jpg"
									alt="Product"
								/>
							</div>
							<div className="content">
								<h5>Online Shopping Plugin</h5>
								<div className="admin-ratting">
									<span className="admin">
										By <a href="#">Webtend</a> in CMS
									</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star-half-alt" />
										<span>(8.5k )</span>
									</div>
								</div>
								<div className="price-details-btn">
									<span className="price">29.55</span>
									<Link
										href="/product-details"
										className="theme-btn"
									>
										Details{" "}
										<i className="fas fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 item saas vectors">
						<div className="product-item wow fadeInUp delay-0-4s">
							<div className="image">
								<img
									src="assets/images/shop/product5.jpg"
									alt="Product"
								/>
							</div>
							<div className="content">
								<h5>Fitness UI Kits</h5>
								<div className="admin-ratting">
									<span className="admin">
										By <a href="#">Webtend</a> in CMS
									</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star-half-alt" />
										<span>(8.5k )</span>
									</div>
								</div>
								<div className="price-details-btn">
									<span className="price">58.55</span>
									<Link
										href="/product-details"
										className="theme-btn"
									>
										Details{" "}
										<i className="fas fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 item plugin ilustration ui-kits">
						<div className="product-item wow fadeInUp delay-0-6s">
							<div className="image">
								<img
									src="assets/images/shop/product6.jpg"
									alt="Product"
								/>
							</div>
							<div className="content">
								<h5>Dashboard UI Templates</h5>
								<div className="admin-ratting">
									<span className="admin">
										By <a href="#">Webtend</a> in CMS
									</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star-half-alt" />
										<span>(8.5k )</span>
									</div>
								</div>
								<div className="price-details-btn">
									<span className="price">37.55</span>
									<Link
										href="/product-details"
										className="theme-btn"
									>
										Details{" "}
										<i className="fas fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 item saas dashboard">
						<div className="product-item wow fadeInUp delay-0-2s">
							<div className="image">
								<img
									src="assets/images/shop/product7.jpg"
									alt="Product"
								/>
							</div>
							<div className="content">
								<h5>Travel Service Templates</h5>
								<div className="admin-ratting">
									<span className="admin">
										By <a href="#">Webtend</a> in CMS
									</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star-half-alt" />
										<span>(8.5k )</span>
									</div>
								</div>
								<div className="price-details-btn">
									<span className="price">29.55</span>
									<Link
										href="/product-details"
										className="theme-btn"
									>
										Details{" "}
										<i className="fas fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 item plugin vectors">
						<div className="product-item wow fadeInUp delay-0-4s">
							<div className="image">
								<img
									src="assets/images/shop/product8.jpg"
									alt="Product"
								/>
							</div>
							<div className="content">
								<h5>Mountain Retro Illustration</h5>
								<div className="admin-ratting">
									<span className="admin">
										By <a href="#">Webtend</a> in CMS
									</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star-half-alt" />
										<span>(8.5k )</span>
									</div>
								</div>
								<div className="price-details-btn">
									<span className="price">58.55</span>
									<Link
										href="/product-details"
										className="theme-btn"
									>
										Details{" "}
										<i className="fas fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6 item saas ui-kits dashboard">
						<div className="product-item wow fadeInUp delay-0-6s">
							<div className="image">
								<img
									src="assets/images/shop/product9.jpg"
									alt="Product"
								/>
							</div>
							<div className="content">
								<h5>African Animal Forest Design</h5>
								<div className="admin-ratting">
									<span className="admin">
										By <a href="#">Webtend</a> in CMS
									</span>
									<div className="ratting">
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star" />
										<i className="fas fa-star-half-alt" />
										<span>(8.5k )</span>
									</div>
								</div>
								<div className="price-details-btn">
									<span className="price">37.55</span>
									<Link
										href="/product-details"
										className="theme-btn"
									>
										Details{" "}
										<i className="fas fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div> */}
					</div>
				</Fragment>
			)}

			<div className="row my-5">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
					<Pagination
						count={dataItems.meta?.pagination?.pageCount || 10}
						page={currentPage}
						defaultPage={1}
						color="primary"
						size="large"
						onChange={(e, page) => onChangePaginate(e, page)}
					/>
				</div>
			</div>
		</ThemeProvider>
	)
}
export default ShopIsotope
