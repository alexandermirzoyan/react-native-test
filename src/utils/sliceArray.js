export const sliceArray = (array, elementsSize) => {
  let slicedArray = [];
  if (Array.isArray(array)) {
    if (array.length < elementsSize) {
      slicedArray = array;
    }
    else {
      slicedArray = array.slice(0, elementsSize).map(i => i);
    }
  }
  return slicedArray;
};