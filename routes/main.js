var formHandler = require('../handlers/form.js');
var indexHandler = require('../handlers/index.js');
var processHandler = require('../handlers/process.js');

module.exports = function(app) {

	app.get('/', indexHandler.getIndex);

	app.get('/form', formHandler.getForm);

	app.post('/process', processHandler.postProcess);

};