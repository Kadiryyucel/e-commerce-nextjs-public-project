const { hostname } = new URL(process.env.SALEOR_API_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		windowHistorySupport: true,
	},
	images: {
		domains: [hostname]
	},
	compiler: {
		styledComponents: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	eslintConfigNext: {
		ignoreDuringBuilds: true,
	}
};

module.exports = nextConfig;
