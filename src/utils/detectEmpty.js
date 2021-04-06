/** Detect empty items in an array, return an array of empty items' index. */ 
const detectEmpty = (ary) => {
  let total = [];
  ary.forEach((item, num) => {
    if (!item) {
      total.push(num);
    }
  });
  return total;
};
export default detectEmpty;
