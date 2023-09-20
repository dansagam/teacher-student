/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      // test: /\.svg$/,
      // issuer: /\.[jt]sx?$/,
      use: [
        "@svgr/webpack",
        "url-loader",
        // options.defaultLoaders.babel
      ],
      // resourceQuery: { not: [/url/] },
    });
    return config;
  },
  images: {
    domains: [
      "media.istockphoto.com",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "www.google.com",
    ],
  },
};

module.exports = nextConfig;
