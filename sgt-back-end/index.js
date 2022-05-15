const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'name is a required field' });
  } else if (!req.body.course) {
    return res.status(400).json({ error: 'course is a required field' });
  } else if (!req.body.score) {
    return res.status(400).json({ error: 'score is a required field' });
  } else if (req.body.score < 0 || req.body.score > 100) {
    return res.status(400).json({ error: 'score must be between 0 and 100' });
  }

  const text = 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score];

  db.query(text, values)
    .then(result => {
      return res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '\'gradeId\' must be a positive integer'
    });
  } else if (!req.body.name) {
    res.status(400).json({
      error: '"\'name\' is a required filed'
    });
  } else if (typeof req.body.name !== 'string') {
    res.status(400).json({
      error: '\'name\' must be a name and not a number'
    });
  } else if (!req.body.course) {
    res.status(400).json({
      error: '\'course\' is a required field'
    });
  } else if (typeof req.body.course !== 'string') {
    res.status(400).json({
      error: '\'course\' must be a course name and not a number'
    });
  } else if (!req.body.score) {
    res.status(400).json({
      error: '\'score\' is a required field'
    });
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'score must be between 0 and 100'
    });
  }

  const text = 'UPDATE grades SET "name"=$1, "course"=$2, "score"=$3 WHERE "gradeId"=$4 RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score, gradeId];

  db.query(text, values)
    .then(result => {
      const id = result.rows[0];
      if (!id) {
        res.status(404).json({
          error: `Cannot find grade with 'gradeId' ${gradeId}`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '\'gradeId\' must be a positive integer'
    });
    return;
  }

  const text = 'DELETE FROM grades WHERE "gradeId"=$1 RETURNING *';
  const params = [gradeId];

  db.query(text, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find 'gradeId' ${gradeId}`
        });
      } else {
        res.status(204).json();
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
