const nextConfig = {
 async redirects() {
  return [
   { source: '/portfolio', destination: '/projects', permanent: true },
   { source: '/portfolio/geniusee/:slug', destination: '/projects/:slug', permanent: true },
   { source: '/my-tutor', destination: '/projects/my-tutor', permanent: true },
   { source: '/projects/level-health', destination: '/projects/levels-health', permanent: true },
  ];
 }
};
export default nextConfig;
