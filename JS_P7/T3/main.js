import { mathAlgorithms } from './mathAlgorithms.js';

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Kadane's Algorithm");
console.log("Результат:", mathAlgorithms.maxSubarraySum(arr1));

const prices = [7, 1, 5, 3, 6, 4];
console.log("\n Stock Buy-Sell ");
console.log("Максимальний прибуток:", mathAlgorithms.maxProfit(prices));

const arr2 = [2, 7, 11, 15, 3, 6];
console.log("\n Two Sum (Target 9) ");
console.log("Пари:", mathAlgorithms.twoSum(arr2, 9));