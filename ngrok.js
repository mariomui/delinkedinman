require('dotenv').config();
const ngrok = require('ngrok');
const port = process.env.EXPRESS_PORT;
var connectAndGetUrl = (port) => {
  return (
    new Promise((resolve, reject) => {
      const url = (ngrok.connect(port));
      resolve(url)
    })
  )
};

if (require.main === module) {
  connectAndGetUrl(port).then((url) => {
    console.log(url);
  })
} else console.log('girl');
module.exports = {
  ngrok: {
    connectAndGetUrl
  }
}