<h1 align="center" id="title">HueFree</h1>

<p align="center"><img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/HueFree.png?raw=true" alt="project-image"></p>

## Description

**HueFree** is a JavaScript library designed to assist developers in creating accessible web applications for color-blind individuals. The library offers a range of color manipulation methods to simulate different types of color blindness and provide color transformations that enhance accessibility.

### Key Features:

- **Simulate Color Blindness**: Accurately simulate various types of color blindness (e.g., protanopia, deuteranopia, tritanopia).
- **Color Transformations**: Transform colors based on transformation matrices and color mappings.
- **Custom Visions**: Create customized vision object with custom color transformation functions.
- **Easy Integration**: Seamlessly integrate into any JavaScript project with minimal setup.

HueFree empowers developers to create a more inclusive web experience by addressing the needs of color-blind users, ensuring that color is not a barrier to accessing information.

## Table of Contents
- [Description](#description)
- [References](#references)
- [Installation](#installation)
- [Examples](#examples)
- [API Documentation](#api-documentation)
- [API Usage](#api-usage)
- [Contributing](#contributing)
- [License](#license)

## References

This project is based on research from the following sources:

### Research Papers
1. **"Digital video colourmaps for checking the legibility of displays by dichromats"** by Viénot, Brettel, and Mollon (1999).
2. **"A Physiologically-based Model for Simulation of Color Vision Deficiency"** by Machado et al. (2009).

### Websites
1. [CVD Simulation by Machado et al.](https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html)
2. [Color Blindness Simulation Research by Ixora.io](https://ixora.io/projects/colorblindness/color-blindness-simulation-research/)
3. [Color Blindness Simulation by mk.bcgsc.ca](https://mk.bcgsc.ca/colorblind/math.mhtml)


## Installation

To install HueFree, follow these steps:

### Browser-based Environment

If you prefer to include HueFree directly in your HTML file using a CDN, add the following script tag to your HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/huefree@1.0.3/dist/huefree.min.js"></script>
```
After adding the script tag, you can start using HueFree in your project. For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HueFree Example</title>
</head>
<body>

    <!-- Adding the HueFree library via CDN -->
    <script src="https://cdn.jsdelivr.net/npm/huefree@1.0.3/dist/huefree.min.js"></script>

    <!-- Usage of HueFree APIs -->
    <script>
        // Example of getting list of supported visions
        const { getVisions } = huefree;
        const visionList = getVisions();
        console.log(visionList);
    </script>
</body>
</html>
```

### Node.js-based Environment

To install HueFree via npm, run the following command in your project directory:
```sh
npm install huefree
```
After installation, you can start using HueFree in your Node.js project. For example:

```js
const huefree = require('huefree');

// Example of color transformation
const transformedColor = huefree.changeVision('rgba(255,23,234,23)', 'protanopia');
console.log(transformedColor);
```

## Examples
### Normal Vision:
<p>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/normal_1.png?raw=true" alt="normal vision output 1" width="300"/>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/normal_2.png?raw=true" alt="normal vision output 2" width="400"/>
</p>

### Protanopia Vision:
<p>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/protanopia_1.png?raw=true" alt="protanopia vision output 1" width="300"/>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/protanopia_2.png?raw=true" alt="protanopia vision output 2" width="400"/>
</p>

### Deuteranopia Vision:
<p>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/deuteranopia_1.png?raw=true" alt="deuteranopia vision output 1" width="300"/>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/deuteranopia_2.png?raw=true" alt="deuteranopia vision output 2" width="400"/>
</p>

### Tritanopia Vision:
<p>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/tritanopia_1.png?raw=true" alt="tritanopia vision output 1" width="300"/>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/tritanopia_2.png?raw=true" alt="tritanopia vision output 2" width="400"/>
</p>

### Protanomaly Vision:
<p>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/protanomaly_1.png?raw=true" alt="protanomaly vision output 1" width="300"/>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/protanomaly_2.png?raw=true" alt="protanomaly vision output 2" width="400"/>
</p>

### Deuteranomaly Vision:
<p>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/deuteranomaly_1.png?raw=true" alt="deuteranomaly vision output 1" width="300"/>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/deuteranomaly_2.png?raw=true" alt="deuteranomaly vision output 2" width="400"/>
</p>

### Tritanomaly Vision:
<p>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/tritanomaly_1.png?raw=true" alt="tritanomaly vision output 1" width="300"/>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/tritanomaly_2.png?raw=true" alt="tritanomaly vision output 2" width="400"/>
</p>

### Achromatopsia Vision:
<p>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/achromatopsia_1.png?raw=true" alt="achromatopsia vision output 1" width="300"/>
  <img src="https://github.com/piyushk77/HueFree/blob/main/resources/images/color_visions/achromatopsia_2.png?raw=true" alt="achromatopsia vision output 2" width="400"/>
</p>

## API Documentation

| Method                    | Parameters      | Description                                      |
|---------------------------|-----------------|--------------------------------------------------|
| `getVisions` | `vision object` (Object) | Returns an array containing the list of supported color visions. |
| `getVisionDetail` | `vision` (String), `vision object` (Object) | Returns an object containing complete details of the specified vision. |
| `changeVision` | `target` (String or DOM Element), `visionType` (String), `vision object` (Object) | Modifies and returns the target element (DOM or Color String) with color properties specific to the provided color vision type. |
| `changeVisionRecursive` | `target` (String or DOM Element), `visionType` (String), `vision object` (Object) | Modifies the target element and its sub children iteratively and returns back the new target element. |
| `getCustomVisions` | `vision list` (String) | Returns an object containing huefree format of vision object with custom vision types provided as parameters. |
| `stringToRgb` | `color` (String) | Takes an RGB or an RGBA format color string and returns the extracted color values as a numeric array. |
| `rgbToString` | `color` (Array number[]) | Takes a numeric array and based on number of values returns an RGB of an RGBA color string. |
| `linearize` | `color` (String or Array number[]) | Converts the provided standard RGB color string or array into linearized color space RGB string. |
| `deLinearize` | `color` (String or Array number[])| Converts the provided linear RGB color string or array into standard RGB color string. |
| `colorTransform` | `transMat` (Array number[][]), `rgbMat` (Array number[]) | Converts the given RGB matrix value by multiplying with the given transformation matrix. |


## API Usage

### `getVisions(obj (Optional))`

Get the list of all visions supported in the given vision object. By default it will return the list of in-built visions supported by HueFree.

- **Parameters:**
  - `obj` (Object): Vision object to be searched through.
  
- **Returns:**
  - (Array[Strings]): Array of visions as strings.

#### Example

```javascript
const visionList = huefree.getVisions();
console.log(visionList);
```

#### Output
https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/getVisions.png?raw=true
![getVisions Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/getVisions.png?raw=true)


### `getVisionDetail(vision, obj (Optional))`

Get the complete object definition of the given vision type including its description, transformation matrix, usemap and mapColor. Custom object can be provided as second parameter to be searched through.

- **Parameters:**
  - `vision` (String): Type of vision to get details.
  - `obj` (Object): Custom object to be searched for. By default it uses the in-built vision object.

- **Returns:**
  - (Object): Vision object containing specific definitions to the provided vision type.

#### Example

```javascript
const visionDetails = huefree.getVisionDetail("deuteranopia");
console.log(visionDetails);
```

#### Output

![getVisionDetail Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/getVisionDetail.png?raw=true)

### `changeVision(target, visionType, obj (Optional))`

Modifies the given target (Color string or DOM Element) and changes all the color based properties of this element. The child nodes are not affected.

- **Parameters:**
  - `target` (String or DOM Element): Color string or DOM Element to be modified.
  - `visionType` (String): Type of vision to perform color transformation.
  - `obj` (Object): Custom object to be searched for. By default it uses the in-built vision object.

- **Returns:**
  - (Object): Modified string or DOM element.

#### Example

```javascript
let elementId = document.getElementById("i02");
let visionType = "deuteranopia";
huefree.changeVision(elementId, visionType);
```

#### Output

![changeVision Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/changeVision.png?raw=true)

### `changeVisionRecursive(target, visionType, obj (Optional))`

Modifies the given target (Color string or DOM Element) and changes all the color based properties of this element and iteratively changes the properties of all the child nodes of the DOM element.

- **Parameters:**
  - `target` (String or DOM Element): Color string or DOM Element to be modified.
  - `visionType` (String): Type of vision to perform color transformation.
  - `obj` (Object): Custom object to be searched for. By default it uses the in-built vision object.

- **Returns:**
  - (Object): Modified string or DOM element.

#### Example

```javascript
let element = document.documentElement;   // Changes the whole document
let visionType = "deuteranopia";
huefree.changeVisionRecursive(element, visionType);
```

#### Output
##### Before
![changeVisionRecursive Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/changeVisionRecursive1.png?raw=true)
##### After
![changeVisionRecursive Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/changeVisionRecursive2.png?raw=true)

### `getCustomVisions(vision1, vision2, vision3 ...)`

Creates a custom vision object based on the given vision type names and returns the complete object for further customizations.

- **Parameters:**
  - `list of vision names` (String): Custom vision type names.

- **Returns:**
  - (Object): Object containing huefree format of vision object.

#### Example

```javascript
let myVisions = ['myVision_1', 'myVision_2', 'myVision_3'];
let customObject = huefree.getCustomVisions(...myVisions);
console.log(customObject);
```

#### Output

![getCustomVisions Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/getCustomVisions.png?raw=true)

### `stringToRgb(color)`

Converts a CSS color string of type RGB or RGBA to an array of numeric values. Supports rgb(x,x,x) and rgba(x,x,x,x) formats. If rgb(x,x,x,x) is provided then input is percieved as rgba type. Similarly if rgba(x,x,x) is provided then input is percieved as rgb type.

- **Parameters:**
  - `color` (String): CSS color in RGB or RGBA format.

- **Returns:**
  - (Array number[]): Array containing the RGB components [red, green, blue], or undefined if the input string is invalid, e.g., [255, 23, 45].

#### Example

```javascript
let color = "rgba(23,111,68)";
let rgb = huefree.stringToRgb(color);
console.log(rgb);
```

#### Output

![stringToRgb Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/stringToRgb.png?raw=true)

### `rgbToString(color)`

Converts an array of RGB or RGBA values to a CSS color string. If invalid format is provided then the array is returned without any modifications.

- **Parameters:**
  - `color` (Array number[]): Array containing the RGB components [red, green, blue] or [red, green, blue, alpha].

- **Returns:**
  - (String): The CSS color string in the format 'rgb(r, g, b)' or 'rgba(r, g, b, a)'.

#### Example

```javascript
let rgb = [23,45,233,50];
let rgbString = huefree.rgbToString(rgb);
console.log(rgbString);
```

#### Output

![rgbToString Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/rgbToString.png?raw=true)

### `linearize(color)`

Linearizes an sRGB color array by applying a gamma correction formula.

- **Parameters:**
  - `color` (String or Array number[]): The CSS color string or an array containing the RGB components [red, green, blue, alpha].
- **Returns:**
  - (Array number[]): Array containing the linearized RGB components [red, green, blue, alpha], or undefined if the input is invalid.

#### Example

```javascript
let color = "rgba(23,111,68,23)";
let rgbLinear = huefree.linearize(color);
console.log(rgbLinear);
```

#### Output

![linearize Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/linearize.png?raw=true)

### `deLinearize(color)`

De-linearizes an RGB color array from linear to gamma-corrected sRGB values.

- **Parameters:**
  - `color` (String or Array number[]): The CSS color string or an array containing the linearized RGB components [red, green, blue, alpha].
- **Returns:**
  - (Array number[]): Array containing the de-linearized sRGB components [red, green, blue, alpha], or undefined if the input is invalid.

#### Example

```javascript
let rgbLinear = [ 0.008568125618069307, 0.1589608350608804, 0.05780543019106723, 23 ];
let sRGB = huefree.deLinearize(rgbLinear);
console.log(sRGB);
```

#### Output

![deLinearize Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/deLinearize.png?raw=true)

### `colorTransform(transMat, rgbMat)`

Applies a color transformation matrix to an RGB color array.

- **Parameters:**
  - `transMat` (Array number[][]): The transformation matrix, a 3x3 array of numbers.
  - `rgbMat` (Array number[]): An array containing the transformed RGB components.
- **Returns:**
  - (Array number[]): An array containing the RGB components [red, green, blue, alpha].

#### Example

```javascript
let transform = [
    [0.2, 1, 0.3],
    [0, 1, 1],
    [1.2, -1.1, -0.3]
];
let rgb = [233, 123, 19];
let transRgb = huefree.colorTransform(transform, rgb);
console.log(transRgb);
```

#### Output

![colorTransform Output](https://github.com/piyushk77/HueFree/blob/main/resources/images/method_outputs/colorTransform.png?raw=true)

## Contributing

We welcome contributions to HueFree! If you'd like to contribute, please follow these steps:

### How to Contribute

1. **Fork the Repository:**
   - Fork the [HueFree repository](https://github.com/piyushk77/HueFree) on GitHub.

2. **Clone the Fork:**
    - Clone your forked repository to your local machine.

    ```sh
        git clone https://github.com/your-username/huefree.git
    ```
    ```sh
        cd huefree
    ```

3. **Create a Branch:**
    - Create a new branch for your feature or bug fix.

    ```sh
        git checkout -b your-branch-name
    ```

4. **Make Your Changes:**
    - Implement your feature or bug fix in your new branch.

    ```sh
        git add .
        git commit -m "Description of your changes"
    ```

5. **Commit Your Changes:**
   - Commit your changes with a descriptive commit message.

    ```sh
        git clone https://github.com/your-username/huefree.git
    ```

6. **Push to Your Fork:**
   - Push your changes to your forked repository.

    ```sh
        git push origin your-branch-name
    ```

7. **Create a Pull Request:**
   - Open a pull request from your branch to the main branch of the original repository.
   - Provide a clear and descriptive title for your pull request.
   - Include a detailed description of your changes and any related issue numbers.

## License

This project is licensed under the [GNU General Public License Version 3](https://github.com/piyushk77/HueFree/blob/main/LICENSE). See the LICENSE file for more details.