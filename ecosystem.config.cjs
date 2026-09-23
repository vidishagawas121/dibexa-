module.exports = {
  apps: [
    {
      name: 'debexa-app',
      script: 'server.cjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
