const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 @ 指向 src 目录
      '@components': path.resolve(__dirname, 'src/components'), // 将 @components 指向 src/components 目录
      '@assets': path.resolve(__dirname, 'src/assets'), // 将 @assets 指向 src/assets 目录
      '@styles': path.resolve(__dirname, 'src/styles'), // 将 @styles 指向 src/styles 目录
      '@utils': path.resolve(__dirname, 'src/utils'), // 将 @utils 指向 src/utils 目录
      '@hooks': path.resolve(__dirname, 'src/hooks'), // 将 @hooks 指向 src/hooks 目录
      '@pages': path.resolve(__dirname, 'src/pages'), // 将 @pages 指向 src/pages 目录
      '@routes': path.resolve(__dirname, 'src/routes'), // 将 @routes 指向 src/routes 目录
      '@services': path.resolve(__dirname, 'src/services'), // 将 @services 指向 src/services 目录
      '@types': path.resolve(__dirname, 'src/types'), // 将 @types 指向 src/types 目录

    },
  },
};
