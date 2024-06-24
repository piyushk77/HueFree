const visions = Object.freeze({
    protanopia: Object.freeze({
        description : "Blindness to red is known as protanopia, a state in which the red cones are absent, leaving only the cones that absorb blue and green light.\nSource: https://www.britannica.com/science/color-blindness",
        transMatrix : [
            [0.170556992, 0.829443014, 0],
            [0.170556991, 0.829443008, 0],
            [-0.004517144, 0.004517144, 1]
        ],
        useMap : false,
        colorMap : null
    }),
    deuteranopia: Object.freeze({
        description : "Blindness to green is known as deuteranopia, wherein green cones are lacking and blue and red cones are functional.\nSource: https://www.britannica.com/science/color-blindness",
        transMatrix : [
            [0.33066007, 0.66933993, 0],
            [0.33066007, 0.66933993, 0],
            [-0.02785538, 0.02785538, 1]
        ],
        useMap : false,
        colorMap : null
    }),
    tritanopia: Object.freeze({
        description : "Tritanopia is a condition where a person cannot distinguish between blue and yellow colors. Impaired blue and yellow vision is the main symptom that is associated with this condition.\nSource: https://colormax.org/tritanopia",
        transMatrix : [
            [1, 0.1273989, -0.1273989],
            [0, 0.8739093, 0.1260907],
            [0, 0.8739093, 0.1260907]
        ],
        useMap : false,
        colorMap : null
    }),
    protanomaly: Object.freeze({
        description : "Protanomaly is referred to as “red-weakness”, an apt description of this form of color deficiency. Red, orange, yellow, and yellow-green appear somewhat shifted in hue (“hue” is just another word for “color”) towards green, and all appear paler than they do to the normal observer.\nSource: http://www.colorvisiontesting.com/color2.htm",
        transMatrix : [
            [0.458064, 0.679578, -0.137642],
            [0.092785, 0.846313, 0.060902],
            [-0.007494, -0.016807, 1.024301]
        ],
        useMap : false,
        colorMap : null
    }),
    deuteranomly: Object.freeze({
        description : "The deuteranomalous person is considered “green weak”. The person is poor at discriminating small differences in hues in the red, orange, yellow, green region of the spectrum.\nSource: http://www.colorvisiontesting.com/color2.htm",
        transMatrix : [
            [0.547494, 0.607765, -0.155259],
            [0.181692, 0.781742, 0.036566],
            [-0.010410, 0.027275, 0.983136]
        ],
        useMap : false,
        colorMap : null
    }),
    tritanomaly: Object.freeze({
        description : "Tritanomaly is an alleviated form of blue-yellow color blindness. It affects blue-green and yellow-red/pink color discrimination. Reds are easily distinguished and not altered by tritanomaly.\nSource: https://colorblindness-emulator.netlify.app/categories/tritanomaly",
        transMatrix : [
            [1.017277, 0.027029, -0.044306],
            [-0.006113, 0.958479, 0.047634],
            [0.006379, 0.248708, 0.744913]
        ],
        useMap : false,
        colorMap : null
    }),
    achromatopsia: Object.freeze({
        description : "Achromatopsia, also known as Rod monochromacy, is a medical syndrome that exhibits symptoms relating to five conditions, most notably monochromacy.\nSource: https://en.wikipedia.org/wiki/Achromatopsia",
        transMatrix : [
            [0.2126, 0.7152, 0.0722],
            [0.2126, 0.7152, 0.0722],
            [0.2126, 0.7152, 0.0722]
        ],
        useMap : false,
        colorMap : null
    })
});

export default visions;

