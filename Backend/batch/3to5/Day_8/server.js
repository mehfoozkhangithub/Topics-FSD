const mongoose = require('mongoose');

const main = async () => {
  try {
    const connect = mongoose.connect('mongodb://127.0.0.1:27017/mehfooz_DB');

    console.log('DB is Connected✅');

    let userData = new mainModel({
      name: 'mehfooz',
      age: 200,
      married: false,
    });

    await userData.save();

    let value = await mainModel.find();
    console.log(`🚀 ~ value:`, value);

    console.log('data has been successfully added✅');

    (await connect).disconnect();

    console.log('DB is Disconnected ❌');
  } catch (error) {
    console.log('DB Connection Failed ❗');
    console.log(`🚀 ~ error:`, error);
  }
};

const mainModel = new mongoose.model(
  'data',
  new mongoose.Schema(
    {
      name: String,
      age: Number,
      married: Boolean,
    },
    {
      versionKey: false,
    },
  ),
);

main();
