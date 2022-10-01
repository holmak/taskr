import express from 'express';
import Database from 'better-sqlite3';

const router = express.Router();
export default router;

router.get('/', function(req, res) {
  const db = new Database('task.db');
  const stmt = db.prepare('SELECT title FROM tasks');
  const tasks = stmt.all();
  res.render('index', { title: 'taskr', tasks: tasks });
});

router.post('/create', function(req, res) {
  const db = new Database('task.db');
  const stmt = db.prepare('INSERT INTO tasks VALUES(?)');
  stmt.run(req.body.title);
  res.redirect('/');
});
