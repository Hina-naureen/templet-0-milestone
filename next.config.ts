module.exports = {
  async redirects() {
    return [
      {
        source: '/products/old-page',
        destination: '/products',
        permanent: true,
      },
    ];
  },
};
