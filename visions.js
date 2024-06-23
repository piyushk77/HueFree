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
        colorMap : new Map([])
    }),
    tritanopia: Object.freeze({
        description : "Tritanopia is a condition where a person cannot distinguish between blue and yellow colors. Impaired blue and yellow vision is the main symptom that is associated with this condition.\nSource: https://colormax.org/tritanopia",
        transMatrix : [
            [1, 0.1273989, -0.1273989],
            [0, 0.8739093, 0.1260907],
            [0, 0.8739093, 0.1260907]
        ],
        useMap : false,
        colorMap : new Map([])
    }),
    achromatopsia: Object.freeze({
        description : "Achromatopsia, also known as Rod monochromacy, is a medical syndrome that exhibits symptoms relating to five conditions, most notably monochromacy.\nSource: https://en.wikipedia.org/wiki/Achromatopsia",
        transMatrix : [
            [0.2126, 0.7152, 0.0722],
            [0.2126, 0.7152, 0.0722],
            [0.2126, 0.7152, 0.0722]
        ],
        useMap : false,
        colorMap : new Map([])
    })
});

export default visions;

