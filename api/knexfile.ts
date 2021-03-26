const path = require('path')
require('dotenv/config')

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: path.resolve(__dirname, 'src', 'database', 'db.sqlite')
		},
		migrations: {
			directory: path.resolve(__dirname, 'src', 'database', 'migrations')
		},
		seeds: {
			directory: path.resolve(__dirname, 'src', 'database', 'seeds')
		},
		useNullAsDefault: true
	},
	production: {
		client: 'pg',
		connection: process.env.POSTGRES_URL,
		migrations: {
			directory: path.resolve(__dirname, 'src', 'database', 'migrations')
		},
		seeds: {
			directory: path.resolve(__dirname, 'src', 'database', 'seeds')
		},
		useNullAsDefault: true
	}
}
