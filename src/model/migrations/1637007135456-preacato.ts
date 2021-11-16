import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class credores1637007135456 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'credor',
        columns: [
          {
            name: 'idCredor',
            type: 'vachar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'nomeCredor',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'cpfCredor',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'statusCadastro',
            type: 'varchar',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('credor')
  }
}
