/**Remove dumplicated items from an array, then return an new array.*/
const removeDuplicatedItem = (ary) => {
  const orderedAry = Array.from(new Set(ary));
  return orderedAry;
};
export default removeDuplicatedItem;
