import express from 'express';

const router = express.Router();
export default router;

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
