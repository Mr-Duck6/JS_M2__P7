// Bubble Sort
export const bubbleSort = (arr, key) => 
  {
    let count = 0;
    const n = arr.length;
    const result = [...arr];
87
    for (let i = 0; i < n; i++)
       {
        for (let j = 0; j < n - i - 1; j++)
           {
            count++;
            if (result[j][key] > result[j + 1][key])//Міняємо місцями
              {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
              }
          }
        }
    return { sorted: result, comparisons: count };
};

// Quick Sort
export const quickSort = (arr, key) => 
  {
    let count = 0;

    const sort = (array) => 
      {
        if (array.length <= 1) return array;
        
        const pivot = array[Math.floor(array.length / 2)];
        const left = [];
        const right = [];
        const equal = [];

        for (let item of array) 
          {
            count++;
            if (item[key] < pivot[key]) left.push(item);
            else if (item[key] > pivot[key]) right.push(item);
            else equal.push(item);
         }

        return [...sort(left), ...equal, ...sort(right)];
    };

    return { sorted: sort(arr), comparisons: count };
};