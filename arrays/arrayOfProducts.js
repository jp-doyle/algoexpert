// O(n) time, where n = length of input array
// O(n) space

function arrayOfProducts(array) {

  const products = new Array(array.length);
  const leftProducts = new Array(array.length);
  const rightProducts = new Array(array.length);
  let product = 1;

  for (let i = 0; i < array.length - 1; i += 1) {
    product *= array[i];
    leftProducts[i] = product;
  }

  product = 1;
  for (let i = array.length - 1; i > 0; i -= 1) {
    product *= array[i];
    rightProducts[i] = product;
  }

  for (let i = 1; i < array.length - 1; i += 1) {
    products[i] = leftProducts[i - 1] * rightProducts[i + 1];
  }

  products[0] = rightProducts[1];
  products[array.length - 1] = leftProducts[array.length - 2];
  return products;
}