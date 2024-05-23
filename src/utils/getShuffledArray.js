export default function getShuffledArray(arr) {
  const array = arr.slice();
  let curIdx = array.length;

  while (curIdx !== 0) {
    const randomIdx = Math.floor(Math.random() * curIdx);
    curIdx--;

    [array[curIdx], array[randomIdx]] = [array[randomIdx], array[curIdx]];
  }

  return array;
}
