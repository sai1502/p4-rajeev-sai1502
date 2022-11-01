// brute force 2 for loops where time complexity : O(n * n);

// kadane's algo gives solution in O(n)


var maximumSubArray = function(arr) {
    var max_cur=arr[0], max_global = arr[0];
    for (var i = 1; i < arr.length; i++) {
        max_cur = Math.max(arr[i], max_cur + arr[i]);
        max_global = Math.max(max_cur, max_global);
    }  
    return max_global;
};
console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSubArray([-10, -11, -12]));


