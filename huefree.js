/*
HueFree - Color transformations for color blind visions and more.
Copyright (C) 2023, 2024  Piyush Katyal

This file is part of HueFree Library.

HueFree is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

HueFree is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with HueFree.  If not, see <https://www.gnu.org/licenses/>.
*/

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