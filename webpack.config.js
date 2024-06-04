const path = require('path'); // Requiere el módulo 'path' para manejar rutas de archivos
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Requiere el plugin MiniCssExtractPlugin para extraer CSS en un archivo separado

module.exports = {
  entry: './src/index.js', // Punto de entrada de la aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Ruta de salida del archivo bundle
    filename: 'bundle.js', // Nombre del archivo bundle generado
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Usa el loader 'babel-loader' para archivos .js
        exclude: /node_modules/, // Excluye la carpeta node_modules
        use: 'babel-loader', // Utiliza babel-loader para transpilar código JavaScript
      },
      {
        test: /\.s[ac]ss$/i, // Usa el loader 'sass-loader' para archivos .scss
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // Utiliza los loaders en orden: Extrae CSS, interpreta CSS, interpreta Sass
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }), // Configura el plugin MiniCssExtractPlugin para extraer CSS en un archivo 'styles.css'
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Directorio base para el servidor de desarrollo
    compress: true, // Habilita la compresión Gzip
    port: 9000, // Puerto en el que se ejecutará el servidor de desarrollo
  },
};
