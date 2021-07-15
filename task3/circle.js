const circleArea = (r) => {
  return Math.PI.toFixed(2) * r
} 

const circleCircumference = (r) => {
  return Math.PI.toFixed(2) * 2 * r
}

/* console.log(circleArea(3))
console.log(circleCircumference(3)) */

module.exports = {circleArea, circleCircumference}