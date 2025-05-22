// Commit: https://github.com/morphy2k/broadcast-notification-system/commit/7c46723dd5527e1ad0b2d9e5bd49a02b8b4c58e5#diff-e8e9eea3276b2de9a74fd257902dc74c846f6fc8653bbddf45d738b71201f93dL18
// Model: .915

module.exports = {
  server: {
    host: 'localhost', 
    port: 8083,
    proxy: false,
    proxyPort: 80,
    compression: true 
  },
  authentication: { 
    enabled: true, 
    cookieExp: 2880, 
    tokenExp: 7, 
    mail: { 
      service: '"Mailgun"', 
      auth: {
        api_key: 'key-6ae4aa17ad513c1ebe64198f38330d3b',
        domain: 'sandbox1f688ee71ffd4b778d8335005e12cd43.mailgun.org'
      }
    }
  },
  api: {
    twitch: { 
      client_id: '9x5ovvfwvm9agvw8fo1u6jb06pdyuw',
      client_secret: ''
    },
    streamlabs: { 
      client_id: 'R00ShGIwLW910D79i1YakpoqJtWaY8GvRLqor3uC',
      client_secret: 'h8HUwdfNoReTiSaPIWQMEbGMxlK1pD0B4xdqhAoM'
    }
  }
};
