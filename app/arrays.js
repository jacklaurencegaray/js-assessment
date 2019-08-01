exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function (arr, item) {
    var newArr = arr.slice();

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        newArr.splice(i, 1);
        i--;
      }
    }
    return newArr;
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function (arr) {
    arr.length--;
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function (arr) {
    var numbers = {};
    var duplicates = [];

    for (var i = 0; i < arr.length; i++) {
      if (numbers[arr[i]]) {
        duplicates.push(arr[i]);
      } else {
        numbers[arr[i]] = true;
      }
    }

    return duplicates;
  },

  square: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences: function (arr, target) {
    var occurrences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i);
      }
    }
    return occurrences;
  }
};
