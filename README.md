# mtasa-sdk v0.1.0

A module to facilitate calling http exported functions from MTA:SA servers.

## Installation
```javascript
var MTA = require('mtasa-sdk');
```

## Usage
### MTA Class
The module exports a class, the MTA class. Instantiating the class requires you to specify a host and port to the MTA:SA server.

#### Syntax:
```javascript
MTA(host='localhost', port=22005, username='', password='') // Contrustor
MTA.prototype.call(resource_name, function_name, arguments={})
```

### Example
```javascript
var MTA = require('mtasa-sdk');

var myserver = new MTA(); // Connect to http://localhost:22005
myserver.call('resource', 'exportedFunction', ['arg1', 'arg2', 5, ['table']]);
```