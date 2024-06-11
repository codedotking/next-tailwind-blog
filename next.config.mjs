import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ["./"],
    },
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

// Import the MDX plugin
const withMDX = mdx();
export default withMDX(nextConfig);
