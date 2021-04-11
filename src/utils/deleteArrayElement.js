/** Input an array and index of the item you want to delete,
 *  returns a new array with all items of the original array
 * except the item you want to delete. */
const deleteArrayElement = (ary, itemnum) => {
  const changedAry = [
    ...ary.slice(0, itemnum),
    ...ary.slice(itemnum + 1, ary.length),
  ];
  return changedAry;
};

/** Input an array and an array of indexes of the items you want to delete,
 *  returns a new array with all items of the original array
 * except the items you want to delete. */
export const deleteArrayElements = (aryToChange, indexAry) => {
  let changingAry = aryToChange;
  for (let index = 0; index < indexAry.length; index++) {
    const element = indexAry[index];
    changingAry = deleteArrayElement(changingAry, element - index);
  }
  const changedAry = changingAry
  return changedAry;
};

export default deleteArrayElement;
