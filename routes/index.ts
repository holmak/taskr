import express from 'express';
import Database from 'better-sqlite3';

const router = express.Router();
export default router;

router.get('/', function(req, res) {
  const db = new Database('task.db');
  const stmt = db.prepare('SELECT rowid, title FROM tasks');
  const tasks = stmt.all();
  res.render('index', { title: 'taskr', tasks: tasks });
});

router.post('/create', function(req, res) {
  const db = new Database('task.db');
  const title = req.body.title;
  if (title !== undefined && title !== '') {
    const stmt = db.prepare('INSERT INTO tasks VALUES(?)');
    stmt.run(title);
  }
  res.redirect('/');
});

router.post('/delete', function(req, res) {
  const db = new Database('task.db');
  const ids = req.body.id;
  if (ids !== undefined) {
    const stmt = db.prepare('DELETE FROM tasks WHERE rowid = ?');
    for (const id of ids) {
      stmt.run(id);
    }
  }
  res.redirect('/');
});
