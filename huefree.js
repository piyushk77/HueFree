// Import functions from colorMethods.js
const {
    stringToRgb,
    rgbToString,
    linearize,
    deLinearize,
    colorTransform
} = require('./src/colorMethods');

// Import functions from visionMethods.js
const {
    getVisions,
    getVisionDetail,
    changeVision,
    changeVisionRecursive,
    getCustomVisions
} = require('./src/visionMethods');

// Export all imported functions
module.exports = {
    stringToRgb,
    rgbToString,
    linearize,
    deLinearize,
    colorTransform,
    getVisions,
    getVisionDetail,
    changeVision,
    changeVisionRecursive,
    getCustomVisions
};