var request = require('request');

function MTA(host, port, username, password) {
  this.host = host || 'localhost';
  this.port = port || 22005;
  this.username = username;
  this.password = password;
}

MTA.prototype.call = function call(resource, func, args, callback) {
  // Check arguments
  if (!resource || typeof(resource) !== 'string' || resource === '') _callError('resource argument is not correct');
  if (!func || typeof(func) !== 'string' || func === '') _callError('function argument is not correct');
  if (typeof(args) === 'object' || typeof(args) == 'array')
    if (!JSON.stringify(args)) _callError('could not stringify the args argument to JSON');
  else if (typeof(args) === 'function') {
    callback = args;
    args = null;
  } else args = JSON.stringify(args);

  var options = {
    url: 'http://'+ this.host +':'+ this.port +'/'+ resource +'/call/'+ func,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': args.length
    },
    body: args,
    auth: {
      user: this.username || '',
      pass: this.password || ''
    }
  };
  request(options, function(err, response, data) {
    if (typeof(callback) === 'function')
      callback(err, data);
  });
};

// Throw error for MTA.call with the msg
function _callError(msg) {
  throw new Error('Failed to call MTA.call: '+ msg);
}

module.exports = MTA;