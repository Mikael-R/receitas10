import knex from 'knex'
const knexConfigFile = require('../../knexfile')

const connection = knex(knexConfigFile.development)

export default connection
