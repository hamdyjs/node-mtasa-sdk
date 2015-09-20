var request = require('request');

function MTA(host, port, username, password) {
  this.host = host || 'localhost';
  this.port = port || 22005;
  this.username = username;
  this.password = password;
}

// Throw error for MTA.call with the msg
function _callError(msg) {
  throw new Error('Failed to call MTA.call: '+ msg);
}