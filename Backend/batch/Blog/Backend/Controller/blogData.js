import { blogModel } from '../model/Blog.model.js';

import { userModel } from '../model/User.model.js';

// filter

// sort

// search -> find || findOne

const getBlog = async (req, res) => {
  // const filter = req.query.rating || '';
  // const sort = req.query.category || '';

  /* 
  db -> product key ->[ title, rating, category]
  */

  const blogs = await blogModel.find().lean();

  const keySetup = blogs.reduce((acc, curr) => {
    Object.keys(curr).forEach((key) => {
      if (!acc.includes(key)) {
        acc.push(key);
      }
    });
    acc.filter((el) => el !== '_id' && el !== 'author');
    console.log(`🚀 ~ acc:`, acc);
    return acc;
  }, []);

  console.log(`🚀 ~ keySetup:`, keySetup);

  /*   const keySetup = blogs.reduce((acc, curr) => {
    let obj = curr.toObject();
    console.log(Object.keys(obj));

    return acc;
  }, []);

  console.log(`🚀 ~ keySetup:`, keySetup);
 */
  // const blogs = await blogModel.find(search);

  // res.send(search);
};

const createBlog = async (req, res) => {
  if (req.body) {
    const authorID = await userModel.findOne({ _id: req.userCode.userID });
    const blogData = await blogModel.create({
      ...req.body,
      author: authorID._id,
    });
    res.send(blogData);
  } else {
    res.send('please enter any thing in body');
  }
};

const deleteBlog = async (req, res) => {
  const userDetail = await userModel.findOne({ _id: req.userCode.userID });

  if (req.params && res.userCode == userDetail._id) {
    const data = await blogModel.deleteOne(req.params);
    // const data = await blogModel.findByIdAndDelete(req.params);
    res.send({
      msg: `data has been deleted`,
      data,
      id: req.params,
    });
  }
  res.send('something went wrong...');
};
const updateOneBlog = () => {};
const updateManyBlog = () => {};

export { createBlog, deleteBlog, updateManyBlog, updateOneBlog, getBlog };
