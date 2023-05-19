export const menu = [
	{
		name: "Inicio",
		path: "/",
	},
	{
		name: "Nosotros",
		path: "/#about_us",
	},
	{
		name: "Lineas",
		path: "/#lines",
		children: [
			{
				name: "Linea Azul",
				path: "/blue_line",
			},
			{
				name: "Linea Verde",
				path: "/green_line",
			},
		],
	},
	{
		name: "Contáctanos",
		path: "/#contact",
	},
]

export const blue_menu = [
	{
		name: "Inicio",
		path: "/blue_line/#home",
	},
	{
		name: "Marca",
		path: "/blue_line/#mark",
	},
	{
		name: "Contáctanos",
		path: "/blue_line/#contact",
	},
]

export const green_menu = [
	{
		name: "Inicio",
		path: "/green_line/#home",
	},
	{
		name: "Productos",
		path: "/green_line/#product",
	},
	{
		name: "Contáctanos",
		path: "/contact",
	},
]
