const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
From assistance_requests
JOIN teachers ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id 
WHERE cohorts.name like '%${process.argv[2]}%'
GROUP BY teacher, cohort
LIMIT 5;`
).then(res => {
  res.rows.forEach(user => {
    // console.log(JSON.stringify(user));
    console.log(`${process.argv[2]}: ${user.teacher}`);
  });
}).catch(err => console.error('query error', err.stack));