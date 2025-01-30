/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com", "images.unsplash.com","via.placeholder.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com", "flagcdn.com"],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**.flagcdn.com",
            },
          ],
    },
};

export default nextConfig;
