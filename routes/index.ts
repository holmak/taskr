import express from 'express';
import Database from 'better-sqlite3';

const router = express.Router();
export default router;

const db = new Database('data.db');

router.get('/', function(req, res) {
  res.send('hello!'); return;
  db.prepare('INSERT INTO activity VALUES(?, datetime())').run(req.path);
  const count = db.prepare('SELECT COUNT(*) FROM activity').pluck().get();
  res.send(`activity: ${count} total requests`);
});
