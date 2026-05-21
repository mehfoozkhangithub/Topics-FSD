import express from 'express';

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
  res.send("all user's");
});

export { userRoutes };
