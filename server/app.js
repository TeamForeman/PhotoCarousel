require('dotenv').config();
const server = require('./index.js');

let port = process.env.PORT || 3003;

server.app.listen(port, ()=> {
  console.log(`Now listening on port ${port}`);
});