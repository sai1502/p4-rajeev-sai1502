// Dutch national flag problem : algo best case senario 
// time- complexity : O(n) && space-complexity O(1)

// ref : https://youtu.be/yj_14t67Bh0

// javascript implementation of the approach

// This implementation is variant of quicksort algorithm. We pick a pivot and compare it with other elements of the array and sort them.

// We are going to maintain three indexes low, mid, and high which will be used to arrange the array elements.
// Then we are going to loop till mid <= high.
// In each iteration we will check the value of the array element at mid index.
// If it is 0 the we will swap the array elements at index low++ and mid++.
// Else if it is 2 the we will swap the array elements at index mid++ and high--.
// Else just increase the mid++.




//Function to swap two elements
let swap = (arr, first, second) => {
    [arr[first], arr[second]] = [arr[second], arr[first]];
  }
  
  // //Solution
  let dutchNatFlag = (arr) => {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
  
    //To sort in ascending order
    while (mid <= high) {
      if (arr[mid] === 0) {
        swap(arr, low++, mid++);
      } else if (arr[mid] === 2) {
        swap(arr, mid, high--);
      } else if (arr[mid] === 1) {
        mid++;
      }
    }
  
    return arr;
  }
  
  console.log(dutchNatFlag([2, 2, 2, 0, 0, 0, 1, 1]));
  
  
  
  
  
  
  