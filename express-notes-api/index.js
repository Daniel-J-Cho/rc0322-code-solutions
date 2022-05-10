const express = require('express');
const fs = require('fs');
const jsonData = require('./data.json');
const app = express();

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const id in jsonData.notes) {
    notesArr.push(jsonData.notes[id]);
  }
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  let notesObj = {};
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (jsonData.notes[req.params.id]) {
    notesObj = jsonData.notes[req.params.id];
    res.status(200).json(notesObj);
  } else if (jsonData.notes[req.params.id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ error: 'content is a required field' });
  }
  const newNote = req.body;
  newNote.id = jsonData.nextId;
  jsonData.notes[newNote.id] = newNote;
  jsonData.nextId++;
  const newJson = JSON.stringify(jsonData, null, 2);
  fs.writeFile('data.json', newJson, 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    } else {
      res.status(201).json(newNote);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  } else if (jsonData.notes[id] === undefined) {
    return res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete jsonData.notes[id];
  }
  const newJson = JSON.stringify(jsonData, null, 2);
  fs.writeFile('data.json', newJson, 'utf8', err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    } else {
      return res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    return res.status(400).json({ error: 'content is a required field' });
  } else if (jsonData.notes[id] === undefined) {
    return res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    const newNote = req.body;
    newNote.id = id;
    jsonData.notes[newNote.id] = newNote;
  }
  const newJson = JSON.stringify(jsonData, null, 2);
  fs.writeFile('derp/data.json', newJson, 'utf8', err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    } else {
      return res.status(200).json(jsonData.notes[id]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
