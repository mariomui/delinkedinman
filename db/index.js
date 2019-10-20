const mongoose = require('mongoose');
const { dbConfig } = require('./dbConfig');
const { dbPort, dbName } = dbConfig;

const schemas = require('./schemas');

const { userSchema } = schemas;


mongoose.connect(`mongodb://localhost:${dbPort}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
let UserSchema = new mongoose.Schema(userSchema);

const UserModel = mongoose.model('Users', UserSchema);

const createUser = name => UserModel
  .create({ name })
  .then((data) => {
    console.log(data, "User was created");
  })
  .catch(console.log);

const findUserByName = name => UserModel
  .findOne({ name })
  .then((data) => data);

module.exports = {
  createUser,
  userSchema,
  UserModel,
  findUserByName
}

