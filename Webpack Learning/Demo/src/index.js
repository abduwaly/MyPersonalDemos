var test= require('./test.js');
var  style = require('./main.css');
var config = require('./config.json');

document.getElementById('root').appendChild(test());

if(module.hot) {
    // accept update of dependency
    module.hot.accept(
      
      [ test, config ],  // dependencies
      
      function() {
          // replace request handler of server
          location.reload();
      }
    );
}
