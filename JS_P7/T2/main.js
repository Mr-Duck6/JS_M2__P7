import { taskService } from './taskService.js';

const myTasks = [
    { 
        title: "Вивчити React", 
        description: "Пройти курс по хуках", 
        priority: "high", 
        status: "in-progress", 
        deadline: "2026-05-20",
        category: "Education"
    },
    { 
        title: "Купити продукти", 
        description: "Молоко, хліб", 
        priority: "low", 
        status: "done", 
        deadline: "2026-05-10",
        category: "Personal"
    },
    { 
        title: "Здати проект", 
        description: "Фінальний захист", 
        priority: "high", 
        status: "todo", 
        deadline: "2026-05-01",
        category: "Work"
    }
];

const stats = taskService.getStats(myTasks);
const percent = taskService.getCompletionPercentage(myTasks);

console.log("Статистика завдань:", stats);
console.log(`Виконано: ${percent}%`);

const sorted = taskService.sortTasks(myTasks, 'priority');
console.log("Відсортовано за пріоритетом (High -> Low):", sorted);