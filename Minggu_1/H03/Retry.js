class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(x, y) {
  if (x / y >= 0) {
    return x / y;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(x, y) {
    console.log(primitiveMultiply(x,y));
}

console.log(reliableMultiply(100, 10));