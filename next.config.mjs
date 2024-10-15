import withSvgr from 'next-plugin-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default withSvgr(nextConfig);
