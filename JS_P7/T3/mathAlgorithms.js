export const mathAlgorithms =
 {
    maxSubarraySum: (nums) => 
      {
        let maxSoFar = nums[0];
        let currentMax = nums[0];
        console.log(`Початковий стан: max=${maxSoFar}`);

        for (let i = 1; i < nums.length; i++) 
          {
            currentMax = Math.max(nums[i], currentMax + nums[i]);
            maxSoFar = Math.max(maxSoFar, currentMax);
            console.log(`Крок ${i}: число ${nums[i]}, поточна сума ${currentMax}, найкраща ${maxSoFar}`);
          }
        return maxSoFar;
      },


    twoSum: (nums, target) => 
      {
        const seen = new Set();
        const pairs = [];
        for (let num of nums) 
          {
            const complement = target - num;
            if (seen.has(complement))
               {
                pairs.push([complement, num]);
              }
            seen.add(num);
          }
        return pairs;
      },


    maxProfit: (prices) => 
      {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let price of prices) 
          {
            if (price < minPrice) 
              {
                minPrice = price; 
              } 
              else if (price - minPrice > maxProfit) 
              {
                maxProfit = price - minPrice; 
              }
          }
        return maxProfit;
      },


    slidingWindowMax: (nums, k) =>  {
        if (!nums.length) return [];
        const result = [];
        for (let i = 0; i <= nums.length - k; i++) 
          {
            const window = nums.slice(i, i + k);
            result.push(Math.max(...window));
            console.log(`Вікно [${window}]: max = ${result[result.length - 1]}`);
          }
        return result;
      }
};