import knex from 'knex'
import knexConfigFile from '../../knexfile'

const connection = knex(
  process.env.PRODUCTION
    ? knexConfigFile.production
    : knexConfigFile.development
)

export default connection
