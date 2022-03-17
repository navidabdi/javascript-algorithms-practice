/*

The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

This kata is part of a series with Aspect Ratio Cropping - Part 2 .

Example
374 × 280 pixel image with a 4:3 aspect ratio.
Aspect ratio 4 3 example

500 × 280 pixel image with a 16:9 aspect ratio.

Aspect ratio 16 9 example3

*/

// My Solution 1
function aspectRatio(x, y) {
  return [Math.ceil((y * 16) / 9), y];
}
// My Solution 2

// Test the Solution
console.log(aspectRatio(640, 480)); // x = 640, y = 480
console.log(aspectRatio(1920, 1440)); // x = 1920, y = 1440

// One of other Solutions
function aspectRatio_S2(x, y) {
  let result = [];

  x = Math.ceil(y * 1.77777777);

  result.push(x, y);
  return result;
}
// One of other Solutions
const aspectRatio_S3 = (_, y) => [Math.ceil((16 * y) / 9), y];
