import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').primary().notNullable().unique()
    table.string('username', 12).notNullable().unique()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('passwordHash').notNullable()
    table.string('token').notNullable().unique()
    table
      .string('avatarUrl')
      .notNullable()
      .defaultTo(
        'https://i.pinimg.com/564x/4a/cf/16/4acf16a2999a4c6dfdfe03f198b95b13.jpg'
      )
    table.text('description')
    table.timestamp('createdAt').notNullable().defaultTo(new Date().getTime())
    table.timestamp('updatedAt')
    table.timestamp('lastSessionAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
