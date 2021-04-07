/**Remove dumplicated items from an array.*/
const removeDuplicatedItem = (ary) => {
  const orderedAry = Array.from(new Set(ary));
  return orderedAry;
};
export default removeDuplicatedItem;
