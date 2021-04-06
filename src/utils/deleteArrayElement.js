/** Input an array and index of the item you want to delete,
 *  returns a new array with all items except the item you want to delete. */
const deleteArrayElement = (ary, itemnum) => {
  const changedAry = [
    ...ary.slice(0, itemnum),
    ...ary.slice(itemnum + 1, ary.length),
  ];
  return changedAry;
};
export default deleteArrayElement;
