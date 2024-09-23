# Description

A little [Three.js](https://threejs.org/) app with these features:

* The project was scaffolded using [Vite](https://vitejs.dev/)
* Uses custom shaders that are imported as static assets
  * See [Importing Asset as String](https://vitejs.dev/guide/assets#importing-asset-as-string)
* [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
* [MUI](https://mui.com/)

# Query string params

| Query string param | Description | Value |
| ------------------ | ----------- | ----- |
| shape | Which shape to show initially | 0 = square<br />1 = triangle<br />2 = circle<br />  |
| colour | Which colour to show initially | 0 = red<br />1 = orange<br />2 = yellow<br />3 = green<br />4 = blue<br />5 = indigo<br />6 = violet |
| caption | Whether to show a caption showing the current shape and colour | on/1/true/enabled<br />off/0/false/disabled |
| kioskMode | In kiosk mode, it is not possible to change the shape, colour or caption | on/1/true/enabled<br />off/0/false/disabled |

## Examples

* https://taylorjg.github.io/vite-react-threejs?shape=2
* https://taylorjg.github.io/vite-react-threejs?colour=6
* https://taylorjg.github.io/vite-react-threejs?shape=2&colour=6
* https://taylorjg.github.io/vite-react-threejs?shape=2&colour=6&caption=on&kioskMode=on

# Keyboard controls

| Key  | Description |
| ---- | ----------- |
| s | Cycle forwards through the available shapes |
| S | Cycle backwards through the available shapes |
| c | Cycle forwards through the available colours |
| C | Cycle backwards through the available colours |
| n | Toggle the caption on/off |
