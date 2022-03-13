module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/projects": { page: "/projects" },
      "/services": { page: "/services" },
      "/contacts": { page: "/contact" },
    };
  },
};
