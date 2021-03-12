import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('recipes', function (table) {
    table.uuid('id').primary().notNullable().unique()
    table.uuid('authorId').notNullable()
    table.string('name').notNullable()
    table.string('preparationTime').notNullable()
    table.string('category').notNullable()
    table.text('ingredients').notNullable()
    table.string('servings').notNullable()
    table.string('difficulty').notNullable()
    table.text('howPrepare').notNullable()
    table.string('demoImages')
    table.text('additionalInformation')
    table.integer('likes').notNullable().defaultTo(0)
    table.timestamp('createdAt').notNullable().defaultTo(new Date().getTime())
    table.timestamp('updatedAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('recipes')
}
