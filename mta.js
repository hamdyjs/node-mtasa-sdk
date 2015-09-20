var request = require('request');

function MTA(host, port, username, password) {
  this.host = host || 'localhost';
  this.port = port || 22005;
  this.username = username;
  this.password = password;
}