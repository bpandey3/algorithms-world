class SortingAlgo {
  bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    return array;
  }

  selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (i !== min) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
    }
    return array;
  }
}

export default class Main {
  public executeCode() {
    const array = [10, 2, 45, 67, 2, 3, 4, 1, 0, 455];
    let sortingAlgo = new SortingAlgo();
    console.log('bubble trouble.  ', sortingAlgo.selectionSort(array));
  }
}
