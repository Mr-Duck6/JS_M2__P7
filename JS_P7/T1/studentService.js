export const studentService = 
{// Фільтрація
    filterStudents: (students, faculty, minGpa) =>
       {
        if (!students.length) return [];
        return students.filter(s => s.faculty === faculty && s.gpa >= minGpa);
        // Статистика
       },getStats: (students) => 
      {
        if (!students.length) return null;
        const totalGpa = students.reduce((acc, s) => acc + s.gpa, 0);
        const distribution = students.reduce((acc, s) => 
          {
            acc[s.faculty] = (acc[s.faculty] || 0) + 1;
            return acc;
           }, {});
        return {
            count: students.length,
            avgGpa: (totalGpa / students.length).toFixed(2),
            top3: [...students].sort((a, b) => b.gpa - a.gpa).slice(0, 3),
            distribution
               };
    }
};