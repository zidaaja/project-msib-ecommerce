const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'), // Adjust to your public directory
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
        product: path.resolve(__dirname, 'src/product.html'),
        aboutus: path.resolve(__dirname, 'src/aboutus.html'),
        checkout: path.resolve(__dirname, 'src/checkout copy.html'),
        copy: path.resolve(__dirname, 'src/checkout.html'),
        login: path.resolve(__dirname, 'src/login.html'),
        // Add more entries if needed
      },
    },
    outDir: path.resolve(__dirname, 'dist'),
  },
  server: {
    port: 5500,
  },
};
