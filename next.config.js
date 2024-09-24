/** @type {import('next').NextConfig} */
const toPath = require("./toPath");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    // Consume image files (listed in fileExtensions) using next-images package
    [
      withImages,
      {
        fileExtensions: [
          "jpg",
          "jpeg",
          "png",
          "gif",
          "ico",
          "webp",
          "jp2",
          "avif",
        ],
      },
    ],
  ],
  {
    sassOptions: {
      // include the path to the scss folder for easy access (it allows you to do things like
      // "@import 'utils'" without having to specify the path)
      includePaths: [toPath("./assets/scss")],
      // Prepend the following line to every scss file (no need to import to use sass
      // variables and other utils in every file)
      // prependData: `@use 'utils' as *;`,
      prependData: `@use 'utils' as *;`,
    },
    images: {
      disableStaticImages: true,
    },
    experimental: {
      outputStandalone: true,
    },
    webpack: (config, options) => {
      // Consume SVG files for webpack
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [{ removeViewBox: false }], // this is needed since webpack removes viewbox by default, rendering our styles for svg obsolete
              },
            },
          },
        ],
      });

      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      });
      return config;
    },
  }
);
