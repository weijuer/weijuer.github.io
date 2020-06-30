module.exports = {
  apps: [
    {
      name: 'weijuer-server',
      script: './app.js',
      watch: true,
      ignore_watch: ['node_modules', 'logs'],
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
