// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: '/schoolhakz/service/',
  bare: 'https://bare.benrogo.net/',
  encodeUrl: (str) => btoa(str),
  decodeUrl: (str) => atob(str),
  handler: '/schoolhakz/uv/uv.handler.js',
  client: '/schoolhakz/uv/uv.client.js',
  bundle: '/schoolhakz/uv/uv.bundle.js',
  config: '/schoolhakz/uv/uv.config.js',
  sw: '/schoolhakz/uv/uv.sw.js',
};
