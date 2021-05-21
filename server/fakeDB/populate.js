const mongoose = require('mongoose');
const FakeDB = require('./fakeDB');

mongoose.connect("mongodb+srv://andre:70985401@portfolio.xzrsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, async () => {
  console.log("populating DB.........");
  await FakeDB.populate();
  
  await mongoose.connection.close();
  console.log("DB has been populated");
})