const plag = require('./index.js');

(async () => {
	console.log('Start');

	await plag(3000);

	console.log('Message after 3000 ms');
})();
