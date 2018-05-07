var config = require('./config.json');

module.exports = function() {
    var test= document.createElement('div');
    test.textContent = config.greetText + "hot DONE!!!";

    return test;
};
