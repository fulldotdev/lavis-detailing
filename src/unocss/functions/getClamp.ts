export default (min: number, max: number) => {
  const start = 360
  const end = 1536
  const slope = (max - min) / (end - start)
  const yAxisIntersection = -start * slope + min
  const clamp = `clamp( ${min}px, ${yAxisIntersection}px + ${
    slope * 100
  }vw, ${max}px )`
  return clamp
}
