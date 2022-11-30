module.exports = {
  apps: [
    {
      name: 'nuxt-demo1',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
