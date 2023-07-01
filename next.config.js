const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://europe.api.riotgames.com/:path*',
      },
    ];
  },
};

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(config.env));
    return config;
  },
};

module.exports = nextConfig;
