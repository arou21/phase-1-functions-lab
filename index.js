function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42
  } else {
    return 42 - blocks
  }
}
function distanceFromHqInFeet(block) {
  let distanceInBlocks = distanceFromHqInBlocks(block)
  console.log('block', distanceInBlocks)
  return distanceInBlocks * 264
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
  return (start - destination) * 264
} else {
  return (destination - start) * 264
  }
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination)
  if (feet <= 400) {
    return 0
  } else if (feet > 400 && feet < 2000) {
    return (feet - 400) * .02
  } else if (feet >= 2000 && feet <= 2500) {
    return 25
  } else if (feet > 2500) {
    return 'cannot travel that far'
  }
}
