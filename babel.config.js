module.exports = {
    presets: [
        "@babel/preset-react",
        "@babel/preset-env",
    ],
    plugins: [["@babel/plugin-transform-runtime", { corejs: 3 }]],
};
