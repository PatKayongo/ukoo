module.exports = {
  apps: [{
    name: 'Ukoo',
    script: 'src/infrastructure/web/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],

  deploy: {
    production: {
      key: '~/.ssh/id_rsa_ukoo_key',
      user: 'ukoo',
      host: 'ukoo.patkayongo.africa',
      ref: 'origin/master',
      repo: 'https://github.com/PatKayongo/ukoo.git',
      path: '/home/ukoo/ukoo',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
