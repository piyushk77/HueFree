const path = require('path');

module.exports = {
    mode: 'production',
    entry: './huefree.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'huefree.js',
        library: 'huefree',
        libraryTarget: 'umd',
        globalObject: 'this'
    }
};