/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: '**.com', pathname: '**', port: '' },
            { protocol: 'https', hostname: '**.org', pathname: '**', port: '' }
        ]
    }
}

module.exports = nextConfig
