module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.plugins.delete('pwa');
    config.plugins.delete('workbox');
  },
};
