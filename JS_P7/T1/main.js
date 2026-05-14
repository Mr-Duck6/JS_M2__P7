import { bubbleSort, quickSort } from './algorithms.js';

const generateStudents = (count) => 
  {
    const faculties = ['CS', 'Math', 'Physics', 'Arts'];
    return Array.from({ length: count }, (_, i) => (
      {
        name: `Student ${i}`,
        age: Math.floor(Math.random() * 10) + 18,
        gpa: Math.floor(Math.random() * 101),
        faculty: faculties[Math.floor(Math.random() * faculties.length)]
    }));
};

const runBenchmark = (size) =>
   {
    const data = generateStudents(size);

// Тест Bubble Sort
    const startBubble = performance.now();
    const resBubble = bubbleSort(data, 'gpa');
    const endBubble = performance.now();

    // Тест Quick Sort
    const startQuick = performance.now();
    const resQuick = quickSort(data, 'gpa');
    const endQuick = performance.now();

    console.log(`Тест на ${size} елементів`);
    console.log(`Bubble Sort: ${resBubble.comparisons} порівнянь, час: ${(endBubble - startBubble).toFixed(2)}ms`);
    console.log(`Quick Sort: ${resQuick.comparisons} порівнянь, час: ${(endQuick - startQuick).toFixed(2)}ms`);
};

[100, 1000, 5000].forEach(runBenchmark);