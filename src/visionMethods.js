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

const visions = require("./visions.js");
const color = require("./colorMethods.js");

/**
 * Retrieves the names of color vision simulations supported by the library or the custom vision object provided by the user.
 *
 * @param {Object} [obj=visions] - Optional parameter specifying the object containing color vision definitions.
 * @returns {string[]} - An array containing the names of the color vision simulations.
 */

function getVisions(obj = visions) {
    return Object.keys(obj);
}

/**
 * Retrieves detailed information about a specific color vision simulation.
 *
 * @param {string} vision - The name of the color vision simulation.
 * @param {Object} [obj=visions] - Optional parameter specifying the object containing color vision definitions.
 * @returns {Object | undefined} - An object containing detailed information about the specified color vision simulation,
 *                               or undefined if the vision name is not found.
 */

function getVisionDetail(vision, obj = visions) {
    return obj[vision];
}

/**
 * Applies color vision simulation transformation to a target element or CSS color string.
 *
 * @param {string | Element} target - The CSS color string or DOM element to apply the color vision simulation.
 * @param {string} visionType - The type of color vision simulation to apply.
 * @param {Object} [obj=visions] - Optional parameter specifying the object containing color vision definitions.
 * @returns {string | Element | undefined} - The transformed CSS color string, DOM element with applied styles,
 *                                           or undefined if the target cannot be processed.
 */

function changeVision(target, visionType, obj = visions) {
    if (!obj[visionType])
        return;
    let rgbRegex = /rgba?\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)(?:\s*,\s*(-?\d+(?:\.\d+)?))?\s*\)/;
    if (typeof (target) === "string") {
        if (target.search(rgbRegex) === -1)
            return target;
        if (!obj[visionType].useMap) {
            let rgbLinear = color.linearize(target);
            let transMatrix = obj[visionType].transMatrix;
            let rgbTrans = color.colorTransform(transMatrix, rgbLinear);
            let sRGB = color.deLinearize(rgbTrans);
            sRGB = color.rgbToString(sRGB);
            sRGB = target.replace(rgbRegex, sRGB);
            return sRGB;
        }
        else {
            let processedValue = obj[visionType].mapColor(color.stringToRgb(target));
            processedValue = color.rgbToString(processedValue);
            processedValue = target.replace(rgbRegex, processedValue);
            return processedValue;
        }
    }
    else if (typeof Element !== 'undefined' && target instanceof Element) {
        if (target.tagName.toLowerCase() === "img") {
            if (!obj[visionType].useMap) {
                applyFilter(target, visionType, obj);
            }
            else {
                function loadEventHandler() {
                    changeVision(target, visionType, obj);
                    target.removeEventListener('load', loadEventHandler)
                }
                if (target.complete) {
                    processPixels(target, visionType, obj);
                } else {
                    target.addEventListener('load', loadEventHandler);
                    return;
                }
            }
        }
        let styles = window.getComputedStyle(target);
        let stylesLength = styles.length;
        let colorStyles = [];
        for (let i = 0; i < stylesLength; ++i) {
            let key = styles[i];
            let value = styles[key];
            if (value.search(rgbRegex) == -1)
                continue;
            colorStyles.push([key, value]);
        }
        for (let property of colorStyles) {
            let key = property[0];
            let value = property[1];
            let processedValue = changeVision(value, visionType, obj);
            target.style[key] = processedValue;
        }
        return target;
    }
    return;
}

/**
 * Recursively applies color vision simulation transformation to all child elements and CSS color strings of a target element.
 *
 * @param {string | Element} target - The CSS color string or DOM element to apply the color vision simulation recursively.
 * @param {string} visionType - The type of color vision simulation to apply.
 * @param {Object} [obj=visions] - Optional parameter specifying the object containing color vision definitions.
 * @returns {Element | string | undefined} - The transformed DOM element with applied styles, the transformed CSS color string,
 *                                           or undefined if the target cannot be processed.
 */

function changeVisionRecursive(target, visionType, obj = visions) {
    if (!obj[visionType])
        return;
    let rgbRegex = /rgba?\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)(?:\s*,\s*(-?\d+(?:\.\d+)?))?\s*\)/;
    if (typeof Element !== 'undefined' && target instanceof Element) {
        let elementMap = new Map();
        let queue = [target];
        while (queue.length > 0) {
            let node = queue.shift();
            if (node.nodeType === Node.ELEMENT_NODE) {
                let styles = window.getComputedStyle(node);
                let stylesLength = styles.length;
                let colorStyles = [];
                for (let i = 0; i < stylesLength; ++i) {
                    let key = styles[i];
                    let value = styles[key];
                    if (value.search(rgbRegex) == -1)
                        continue;
                    colorStyles.push([key, value]);
                }
                elementMap.set(node, colorStyles);
            }
            node.childNodes.forEach(child => queue.push(child));
        }
        elementMap.forEach(function (props, element) {
            if (element.tagName.toLowerCase() === "img") {
                changeVision(element, visionType, obj);
                return;
            }
            for (let property of props) {
                let key = property[0];
                let value = property[1];
                let processedValue = changeVision(value, visionType, obj);
                element.style[key] = processedValue;
            }
        });
    }
    else if (typeof (target) === "string") {
        return changeVision(target, visionType, obj);
    }
    return target;
}

/**
 * Processes each pixel of an image element to simulate color vision deficiency. (Currently not available to public)
 *
 * @param {HTMLImageElement} target - The image element to process.
 * @param {string} visionType - The type of color vision simulation to apply.
 * @param {Object} [obj=visions] - Optional parameter specifying the object containing color vision definitions.
 * @returns {HTMLImageElement | null} - The processed image element with simulated color vision deficiency applied, or null if an error occurs.
 */

function processPixels(target, visionType, obj = visions) {
    var imageCopy = target.cloneNode(true);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = target.width;
    canvas.height = target.height;
    ctx.drawImage(imageCopy, 0, 0, target.width, target.height);
    try {
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
            let srgb = [data[i], data[i + 1], data[i + 2], data[i + 3]];
            srgb = color.rgbToString(srgb);
            srgb = changeVision(srgb, visionType, obj);
            srgb = color.stringToRgb(srgb);
            data[i] = srgb[0];
            data[i + 1] = srgb[1];
            data[i + 2] = srgb[2];
            data[i + 3] = srgb[3];
        }
        ctx.putImageData(imageData, 0, 0);
        target.src = canvas.toDataURL();
        return target;
    } catch (e) {
        console.error('Error processing image:', e.message);
        return null;
    }
}

/**
 * Applies an SVG filter to an image element to simulate color vision deficiency. (Currently not available to public)
 *
 * @param {HTMLImageElement} target - The image element to apply the filter to.
 * @param {string} visionType - The type of color vision simulation to apply.
 * @param {Object} [obj=visions] - Optional parameter specifying the object containing color vision definitions.
 * @returns {HTMLImageElement} - The image element with the SVG filter applied.
 */

function applyFilter(target, visionType, obj = visions) {
    if (!obj[visionType])
        return;
    let timeStamp = new Date().getTime();
    let svgId = "_$svgIdTemp_" + timeStamp;
    let filterId = "_$filterIdTemp_" + timeStamp;
    function convertMatrix(mat) {
        let newMat = `
            ${mat[0][0]} ${mat[0][1]} ${mat[0][2]} 0 0
            ${mat[1][0]} ${mat[1][1]} ${mat[1][2]} 0 0
            ${mat[2][0]} ${mat[2][1]} ${mat[2][2]} 0 0
            0 0 0 1 0        
        `;
        return newMat;
    };

    let matrixValue = convertMatrix(obj[visionType].transMatrix);
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", svgId);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");

    let filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", filterId);

    let feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
    feColorMatrix.setAttribute("type", "matrix");
    feColorMatrix.setAttribute("values", matrixValue);

    filter.appendChild(feColorMatrix);

    svg.appendChild(filter);
    document.body.appendChild(svg);

    function loadEventHandler() {
        target.style.filter = "url(#" + filterId + ")";
        target.removeEventListener('load', loadEventHandler);
    }

    if (target.complete) {
        target.style.filter = "url(#" + filterId + ")";
    } else {
        target.addEventListener('load', loadEventHandler);
    }
    return target;
}

/**
 * Creates a custom visions object with specified vision types. The user can then operate elements on this custom object containing user-defined transformations.
 *
 * @param {...string} arguments - Vision types to include in the custom visions object.
 * @returns {Object} - Custom visions object containing specified vision types with default settings.
 */

function getCustomVisions() {
    let customVisions = {};
    for (let i = 0; i < arguments.length; ++i) {
        let customVision = {
            description: null,
            transMatrix: null,
            useMap: false,
            colorMap: null,
        }
        customVisions[arguments[i]] = customVision;
    }
    customVisions.addVisions = function () {
        for (let i = 0; i < arguments.length; ++i) {
            let customVision = {
                description: null,
                transMatrix: null,
                useMap: false,
                colorMap: null,
            }
            customVisions[arguments[i]] = customVision;
        }
    };
    customVisions.removeVisions = function () {
        for (let i = 0; i < arguments.length; ++i) {
            delete customVisions[arguments[i]];
        }
    }
    return customVisions;
}

module.exports = {
    getVisions,
    getVisionDetail,
    changeVision,
    changeVisionRecursive,
    getCustomVisions
};