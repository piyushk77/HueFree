function changeToAccessible(object) {

    const elements = object.querySelectorAll('*');

    for (let i = 0; i < elements.length; i++) {
        
        const computedStyle = window.getComputedStyle(elements[i]);

        const backgroundColor = computedStyle.getPropertyValue('background-color');
        const color = computedStyle.getPropertyValue('color');
        const borderColor = computedStyle.getPropertyValue('border-color');
        const outlineColor = computedStyle.getPropertyValue('outline-color');
        const fill = computedStyle.getPropertyValue('fill');
        const stroke = computedStyle.getPropertyValue('stroke');
        const caretColor = computedStyle.getPropertyValue('caret-color');
        const columnRuleColor = computedStyle.getPropertyValue('column-rule-color');
        const textDecorationColor = computedStyle.getPropertyValue('text-decoration-color');
        const textEmphasisColor = computedStyle.getPropertyValue('text-emphasis-color');

        elements[i].style.backgroundColor = accessColor(backgroundColor);
        elements[i].style.color = accessColor(color);
        elements[i].style.borderColor = accessColor(borderColor);
        elements[i].style.outlineColor = accessColor(outlineColor);
        elements[i].style.fill = accessColor(fill);
        elements[i].style.stroke = accessColor(stroke);
        elements[i].style.caretColor = accessColor(caretColor);
        elements[i].style.columnRuleColor = accessColor(columnRuleColor);
        elements[i].style.textDecorationColor = accessColor(textDecorationColor);
        elements[i].style.textEmphasisColor = accessColor(textEmphasisColor);
    }
}

function accessColor(userInput) {

    if (userInput.startsWith("rgba") || userInput.startsWith("none")) {
        return userInput;
    }

    const colors = [
        { name: "black", rgb: [0, 0, 0] },
        { name: "orange", rgb: [230, 159, 0] },
        { name: "sky blue", rgb: [86, 180, 233] },
        { name: "bluish green", rgb: [0, 158, 115] },
        { name: "yellow", rgb: [240, 228, 66] },
        { name: "blue", rgb: [0, 114, 178] },
        { name: "vermillon", rgb: [213, 94, 0] },
        { name: "reddish purple", rgb: [204, 121, 167] },
        { name: "white", rgb: [255, 255, 255] }
    ];

    const rgbRegex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const [, red, green, blue] = rgbRegex.exec(userInput);

    const userColor = [parseInt(red), parseInt(green), parseInt(blue)];

    let minDistance = Infinity;
    let closestRGB = [];
    for (const color of colors) {
        const [r, g, b] = color.rgb;
        const distance = Math.sqrt(
            Math.pow(userColor[0] - r, 2) +
            Math.pow(userColor[1] - g, 2) +
            Math.pow(userColor[2] - b, 2)
        );
        if (distance < minDistance) {
            minDistance = distance;
            closestRGB = color.rgb;
        }
    }
    return "rgb(" + closestRGB[0] + ", " + closestRGB[1] + ", " + closestRGB[2] + ")";
}