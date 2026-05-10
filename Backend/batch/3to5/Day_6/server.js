const express = require('express');

const app = express();

const { studentRoutes } = require('./routes/Students.routes');

app.use(express.json());

// a c e udf b d ramu
// a e udf b c d arnav
// a c e udf b d deep

// eg:-1
/* app.use((req, res, next) => {
  if (3 + 5 == 6) {
    res.send('Bye');
  } else {
    console.log('a');
    next();
    console.log('b');
  }
});

app.use((req, res, next) => {
  let flag = false;
  if (flag) {
    res.send('Bye');
  } else {
    console.log('c');
    next();
    console.log('d');
  }
}); */

// eg:-2

let Auth = (req, res, next) => {
  //   console.log(`🚀 ~ req.body.auth:`, req.body.auth);
  if (req.body.auth) {
    next();
  } else {
    res.send('your are not authorized');
  }
};

let logger = (req, res, next) => {
  let startTime = Date.now();
  //   console.log(`🚀 ~ startTime:`, startTime);

  next();
  let endTime = Date.now();
  //   console.log(`🚀 ~ endTime:`, endTime);

  //   console.log(endTime - startTime);
};

app.get('/', (req, res) => {
  //   console.log('e');
  //   console.log(`🚀 ~ req.body:`, req.body);
  res.send('home');
});

app.use(Auth, logger);
app.use('/std', studentRoutes);

app.listen(7000, () => {
  console.log('port in running on 7000');
});
