import knex from 'knex'
const knexConfigFile = require('../../knexfile')

const connection = knex(
  process.env.PRODUCTION
    ? knexConfigFile.production
    : knexConfigFile.development
)

export default connection
