SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions 
join students on student_id = students.id 
join cohorts on students.cohort_id = cohorts.id
where cohorts.name = 'FEB12';


