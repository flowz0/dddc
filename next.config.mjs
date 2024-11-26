/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'https://imgur.com/',
              port: '',
              pathname: '/**',
              search: '',
            },
          ],
    }
};

export default nextConfig;
