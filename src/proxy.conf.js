const PROXY_CONFIG = [
  {
    context: [
      '/figures',
    ],

    target: "http://localhost:8080/",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
       "^/": ""
    }
  },

  {
    context: [
      '/enderecos',
    ],

    target: "http://localhost:8080/",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
       "^/": ""
    }
  },
  {
    context: [
      '/carrinho',
    ],

    target: "http://localhost:8080/",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/": ""
    }
  },

  {
    context: [
      '/usuario',
    ],

    target: "http://localhost:8080/",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
       "^/": ""
    }
  },

  {
    context: [
      '/loginMember',
    ],

    target: "http://localhost:8080/",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
       "^/": ""
    }
  }
]

module.exports = PROXY_CONFIG;
