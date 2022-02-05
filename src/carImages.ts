import carIndices from "./carIndices";

const toyota2ndGen4Runner = [
  '../assets/car/toyota2ndGen4Runner/small.png',
  '../assets/car/toyota2ndGen4Runner/large.png',
]

const bmwE36M3 = [
  '../assets/car/bmwE36M3/small.png',
  '../assets/car/bmwE36M3/large.png',
]

const carImages = Object.fromEntries([
  [carIndices.toyota2ndGen4Runner, toyota2ndGen4Runner],
  [carIndices.bmwE36M3, bmwE36M3],
])

export default carImages;
