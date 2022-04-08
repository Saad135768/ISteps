/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['inteng-storage.s3.amazonaws.com', 'geomiq.com', 'ae01.alicdn.com', 'images.fineartamerica.com', 'previews.123rf.com', 't3.ftcdn.net', 'wallpaperaccess.com'],
  },
}
