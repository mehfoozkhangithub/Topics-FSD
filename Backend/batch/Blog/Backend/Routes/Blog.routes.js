import express from 'express';

const blogRoutes = express.Router();

blogRoutes.get('/', (req, res) => {
  res.send("all blog's");
});

export { blogRoutes };
