/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "comtech.com.bo",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "20.172.225.170",
				port: "",
				pathname: "/**",
			},
		],
	},
}

module.exports = nextConfig
