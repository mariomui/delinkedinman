const userSchema = {
  name: { type: String, required: true },
  wins: { type: Number, default: 0 },
};
/**
 * difficulty: _1_
 * count: _100_
 * start: _50_
 * ie key _1_100_50_
 */
const dictSchema = {
  difficulty: { type: Number, required: true },
  start: { type: Number, required: true },
  words: [String]
}


module.exports = {
  userSchema,
  dictSchema,
}