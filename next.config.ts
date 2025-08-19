import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ik.imagekit.io',
				pathname: '/tapiiri/ace/AcademicCultureEnjoyers/**',
			},
		],
	},
};

export default nextConfig;
