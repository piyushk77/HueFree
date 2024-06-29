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

/**
 * Converts a CSS color string to an array of RGB values.
 * Supports rgb(x,x,x) and rgba(x,x,x,x) formats. If rgb(x,x,x,x) is provided then input is percieved as rgba type.
 * Similarly if rgba(x,x,x) is provided then input is percieved as rgb type.
 * 
 * @param {string} color - The CSS color string to convert, e.g., 'rgb(255, 23, 45)'.
 * @returns {number[]|undefined} - An array containing the RGB components [red, green, blue],
 *                                 or undefined if the input string is invalid, e.g., [255, 23, 45].
 */

function stringToRgb(color) {
    let rgbStart;
    let rgbRegex = /rgba?\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)(?:\s*,\s*(-?\d+(?:\.\d+)?))?\s*\)/;
    let startIndex = color.search(rgbRegex);
    if (startIndex == -1)
        return;
    if (color[startIndex + 3] == 'a')
        rgbStart = startIndex + 5;
    else if (color[startIndex + 3] == '(')
        rgbStart = startIndex + 4;
    else
        return;
    let sRGB = color.substring(rgbStart, color.length - 1);
    sRGB = sRGB.split(/\s*,\s*/);
    for (let i = 0; i < sRGB.length; ++i)
        sRGB[i] = parseFloat(sRGB[i]);
    return sRGB;
}

/**
 * Converts an array of RGB or RGBA values to a CSS color string.
 * If invalid format is provided then the array is returned without any modifications.
 * 
 * @param {number[]} color - An array containing the RGB components [red, green, blue] or [red, green, blue, alpha].
 * @returns {string} - The CSS color string in the format 'rgb(r, g, b)' or 'rgba(r, g, b, a)'.
 */

function rgbToString(color) {
    let rgbString = "rgb(";
    if (color.length === 4) {
        rgbString = "rgba(";
        rgbString += color[0] + ", " + color[1] + ", " + color[2] + ", " + color[3] + ")";
    }
    else if(color.length === 3)
        rgbString += color[0] + ", " + color[1] + ", " + color[2] + ")";
    else
        return color;
    return rgbString;
}

/**
 * Linearizes an sRGB color array by applying a gamma correction formula.
 *
 * @param {string|number[]} color - The CSS color string or an array containing the RGB components [red, green, blue, alpha].
 * @returns {number[]|undefined} - An array containing the linearized RGB components [red, green, blue, alpha],
 *                                 or undefined if the input is invalid.
 */

function linearize(color) {
    let sRGB = color;
    if (typeof (sRGB) === "string")
        sRGB = stringToRgb(sRGB);
    if (!sRGB)
        return;
    // Linearize the sRGB color values
    let rgbLinear = sRGB;
    const boundLimit = 0.04045;
    const maxRGBValue = 255;
    const gamma = 2.4;
    const rgbLength = 3;    // Constant length due to rgba format
    for (let i = 0; i < rgbLength; ++i) {
        let v = sRGB[i] / maxRGBValue;
        if (v <= boundLimit) {
            const fact = 12.92;
            rgbLinear[i] = v / fact;
        }
        else {
            const fact = 0.055;
            rgbLinear[i] = Math.pow(((v + fact) / (1 + fact)), gamma);
        }
    }
    return rgbLinear;
}

/**
 * De-linearizes an RGB color array from linear to gamma-corrected sRGB values.
 *
 * @param {string|number[]} color - The CSS color string or an array containing the linearized RGB components [red, green, blue, alpha].
 * @returns {number[]|undefined} - An array containing the de-linearized sRGB components [red, green, blue, alpha],
 *                                 or undefined if the input is invalid.
 */

function deLinearize(color) {
    let rgbLinear = color;
    if (typeof (rgbLinear) === "string")
        rgbLinear = stringToRgb(rgbLinear);
    if (!rgbLinear)
        return;
    // De-Linearize the color to sRGB
    let sRGB = rgbLinear;
    const gamma = 2.4;
    const boundLimit = 0.0031308;
    const maxRGBValue = 255;
    const rgbLength = 3;        // Constant length due to rgba format
    for (let i = 0; i < rgbLength; ++i) {
        let v = rgbLinear[i];
        if (v <= boundLimit) {
            const fact = 12.92;
            sRGB[i] = maxRGBValue * fact * v;
        }
        else {
            const fact = 0.055;
            sRGB[i] = maxRGBValue * ((1 + fact) * (Math.pow(v, 1 / gamma)) - fact);
        }
    }
    return sRGB;
}

/**
 * Applies a color transformation matrix to an RGB color array.
 *
 * @param {number[][]} transMat - The transformation matrix, a 3x3 array of numbers.
 * @param {number[]} rgbMat - An array containing the RGB components [red, green, blue, alpha].
 * @returns {number[]} An array containing the transformed RGB components.
 */

function colorTransform(transMat, rgbMat) {
    let transColor = [...rgbMat];
    for (let i = 0; i < transMat.length; ++i) {
        let color = transMat[i][0] * rgbMat[0] + transMat[i][1] * rgbMat[1] + transMat[i][2] * rgbMat[2];
        transColor[i] = color;
    }
    return transColor;
}

module.exports = {
    stringToRgb,
    rgbToString,
    linearize,
    deLinearize,
    colorTransform
};