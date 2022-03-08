SELECT assignments.id, assignments.day, assignments.chapter, assignments.name, count(assistance_requests.*) as total_requests
FROM assistance_requests
JOIN assignments ON assignments.id = assistance_requests.assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;