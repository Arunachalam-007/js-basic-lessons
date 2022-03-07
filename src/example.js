/* eslint-disable semi */
function callme () {
  const x = 100;
  const y = x * 2;
  if (x < 500) {
    console.log('x<500')
    const z = x + y;
    console.log(`z:${z}`);
  }
}
console.log(callme());
