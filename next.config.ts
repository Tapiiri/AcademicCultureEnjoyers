import type { NextConfig } from 'next';

const defaultCalendarUrl =
	'https://calendar.google.com/calendar/u/0?cid=YTI1NWJiM2QyYjU3MWI0NmIyNTY5YTFlMzhiYjJiOWJkNGU3MTBiOTllYzZiMzcyMTdiY2JlZjlkMjE0MTllZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/calendar',
				destination:
					process.env.CALENDAR_URL || process.env.NEXT_PUBLIC_CALENDAR_URL || defaultCalendarUrl,
				permanent: true,
			},
		];
	},
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
