module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
    "postcss-import-ext-glob": {},
    "postcss-import": {},
  },
};
