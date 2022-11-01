// Rember one position is fixed in matrix[][], iterating the other element in spiral order. Ex : first for loop we fixedtop and iterating 'i' to get all the elements in row1, like wise, we need to do it for rest of the elements.
//ref : https://youtu.be/pFk4wX9yANw

var spiralOrder = function(matrix) {
    const result = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let direction = 'right';
  
    while (left <= right && top <= bottom) {
      if (direction === 'right') {
        for (let i = left; i <= right; i++) {
          result.push(matrix[top][i])
        }
        top++;
        direction = 'down';
      }
      else if (direction === 'down') {
        for (let i = top; i <= bottom; i++) {
          result.push(matrix[i][right]);
        }
        right--;
        direction = 'left';
      }
      else if (direction === 'left') {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i])
        }
        bottom--;
        direction = 'up';
      }
      else if (direction === 'up') {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
        direction = 'right';
      }
    }
  
    return result;
  }
  
  console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));