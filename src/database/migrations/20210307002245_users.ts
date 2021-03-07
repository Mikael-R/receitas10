import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.string('id').primary().unique()
    table.string('username', 12).notNullable().unique()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('passwordHash').notNullable()
    table.string('token').notNullable().unique()
    table.string('avatarUrl')
    table.string('description')
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
