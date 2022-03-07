SELECT students.name as student, avg(assignment_submissions.duration) as average_assignment_duration, avg(assignments.duration) as average_estimated_duration 
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
JOIN assignments ON assignment_submissions.assignment_id = assignments.id
GROUP BY students.name, students.end_date
HAVING students.end_date IS NULL and avg(assignment_submissions.duration)<avg(assignments.duration)
ORDER BY avg(assignment_submissions.duration); 