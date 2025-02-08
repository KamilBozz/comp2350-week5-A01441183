const mysql = require('mysql2/promise');

const is_hosted = process.env.IS_HOSTED || false;

const dbConfigHosted = {
	host: "mysql-1f9e04c9-my-e658.g.aivencloud.com",
	user: "avnadmin",
	port: 14386,
	password: "AVNS_5cAAyUss2odGFczuPcs",
	database: "defaultdb",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Yok-738738",
	database: "database1",
	multipleStatements: false
};

if (is_hosted) {
	var database = mysql.createPool(dbConfigHosted);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		