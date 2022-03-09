const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const text = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
From assistance_requests
JOIN teachers ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id 
WHERE cohorts.name like $1
GROUP BY teacher, cohort
LIMIT 5;`;

const values = [process.argv[2]];

pool.query(text, values).then(res => {
  res.rows.forEach(user => {
    // console.log(JSON.stringify(user));
    console.log(`${process.argv[2]}: ${user.teacher}`);
  });
}).catch(err => console.error('query error', err.stack));