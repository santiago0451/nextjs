/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'i.picsum.photos', 'api.escuelajs.co', 'picsum.photos', 'images.unsplash.com', 'empresas.blogthinkbig.com', 'img.freepik.com', 'www.woodenson.co', 'emprendepyme.net', 'images.pexels.com', 't3.gstatic.com', 'www.pixel-creation.com'],
  },
};

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
});

module.exports = withPWA(nextConfig);