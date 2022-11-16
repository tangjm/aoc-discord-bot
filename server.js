require('dotenv').config();
const express = require('express');
// By invoking the 'require' function with the index.js file as its argument, 
// we read and execute it before returning the export.
const { client } = require('./index.js');

// Web server to keep bot running and to check its status
const app = express();
const PORT = process.env['PORT'] || 3000;

app.get('/', (req, res) => {
	if (!client.isReady()) {
		client.login(process.env['DISCORD_TOKEN']);
	}
	res.status(200).send('Client is ready');
});

app.listen(PORT, () => {
	console.log('Listening on port: ', PORT);
});

