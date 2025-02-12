const nextConfig = {
  compiler: {
    styledComponents: true, // Use SWC for styled-components
    reactRemoveProperties: true, // Remove unnecessary React properties in development
  },
  images: {
    domains: ["images.prismic.io"], // Add the domain hosting your images
  },
};

module.exports = nextConfig;
