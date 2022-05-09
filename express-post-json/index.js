const express = require('express');
const app = express();

let nextId = 1;

const grades = {
  id: 1
};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const element in grades) {
    gradesArr.push(grades[element]);
  }
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[newGrade.id] = newGrade;
  nextId++;
  res.status(201).send(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
