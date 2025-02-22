const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Enables static export
  basePath: isProd ? "https://github.com/rohit-kumar22/plants_web.git" : "", // Change 'your-repo-name' to your actual repo name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
