/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['inteng-storage.s3.amazonaws.com', 'static1.bigstockphoto.com', 'www.google.com','everytexture.com', 'geomiq.com', 'ae01.alicdn.com', 'images.fineartamerica.com', 'previews.123rf.com', 't3.ftcdn.net', 'wallpaperaccess.com', 'img.rawpixel.com', 'img.freepik.com', 'st.depositphotos.com', 'i2.wp.com'],
  },
}
