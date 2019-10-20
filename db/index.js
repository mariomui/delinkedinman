const mongoose = require('mongoose');
const { dbConfig } = require('./dbConfig');
const { dbPort, dbName } = dbConfig;

const schemas = require('./schemas');

const { userSchema, dictSchema } = schemas;


mongoose.connect(`mongodb://localhost:${dbPort}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
let UserSchema = new mongoose.Schema(userSchema);
let DictSchema = new mongoose.Schema(dictSchema);

// dictSchema.index({ difficulty: 1, start: 1 }, { unique: true });

const UserModel = mongoose.model('Users', UserSchema);
const DictModel = mongoose.model('Dicts', DictSchema);


//User functions.
const createUser = name => UserModel
  .create({ name })
  .then((data) => {
    console.log(data, "User was created");
  })
  .catch(console.log);

const findUserByName = name => UserModel
  .findOne({ name }).exec()
  .then((data) => data);

//Dict functions
const createDict = ({ difficulty, start, words }) => {
  const data = {
    difficulty, start, words
  };
  return DictModel.create(data);
}

const findDict = ({ difficulty, start }) => {
  const data = { difficulty, start };

  return DictModel.findOne(data).exec();
}




module.exports = {
  createUser,
  userSchema,
  UserModel,
  DictModel,
  findUserByName,
  Dict: {
    createDict,
    findDict
  }
}

