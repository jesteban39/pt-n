/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.resolve.alias["@mui/styled-engine"] = path.resolve(
      __dirname,
      "@mui/styled-engine-sc"
    );
    console.log("cofg pos: ", config.resolve.alias);
    return config;
  },
};
