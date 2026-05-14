export const taskService = 
{
    filterTasks: (tasks, filters = {}) => 
      {
        const { status, priority } = filters;
        return tasks.filter(task =>
        {
            const matchStatus = status ? task.status === status : true;
            const matchPriority = priority ? task.priority === priority : true;
            return matchStatus && matchPriority;
        });
      },


    sortTasks: (tasks, sortBy) => 
      {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        const result = [...tasks];

        return result.sort((a, b) => 
          {
            if (sortBy === 'priority')
               {
                return priorityOrder[b.priority] - priorityOrder[a.priority];
               }
            if (sortBy === 'deadline') 
              {
                return new Date(a.deadline) - new Date(b.deadline);
              }
            return 0;
        });
    },

    searchTasks: (tasks, query) => 
      {
        const q = query.toLowerCase();
        return tasks.filter(t => 
            t.title.toLowerCase().includes(q) ||  t.description.toLowerCase().includes(q)
        );
     },

    getStats: (tasks) =>
       {
        const now = new Date();
        
        return tasks.reduce((acc, task) => 
          {
            if (task.status === 'done') acc.completed++;
            else acc.pending++;

            if (task.status !== 'done' && new Date(task.deadline) < now) 
              {
                acc.overdue++;
              }

            if (!acc.byCategory[task.category]) acc.byCategory[task.category] = 0;
            acc.byCategory[task.category]++;

            return acc;
          }, { completed: 0, pending: 0, overdue: 0, byCategory: {} });
    },

    getCompletionPercentage: (tasks) => 
      {
        if (!tasks.length) return 0;
        const done = tasks.filter(t => t.status === 'done').length;
        return ((done / tasks.length) * 100).toFixed(1);
      }
};