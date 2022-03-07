SELECT students.name as student, avg(assignment_submissions.duration) as average_assignment_duration
FROM students
Join assignment_submissions ON assignment_submissions.student_id = students.id
GROUP BY students.name, students.end_date
HAVING students.end_date IS NULL 
ORDER BY avg(assignment_submissions.duration) DESC; 