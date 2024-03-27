  return function (arr, k) {
      res = [];
      combinations(arr, k, 0, 0, []);
      var temp = res;
      // Free the extra memory
      res = null;
      return temp;
    };
  }());

  exports.combinations = combinations;

}((typeof window === 'undefined') ? module.exports : window));

//yes
 function permutations(arr, current) {
      if (current >= arr.length) {
        return res.push(arr.slice());
      }
      for (var i = current; i < arr.length; i += 1) {
        swap(arr, i, current);
        permutations(arr, current + 1);
        swap(arr, i, current);
      }
    }
