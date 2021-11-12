import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class credores1636684124862 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'credor',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'identificador devedor',
            type: 'varchar',
            generationStrategy: 'increment',
            isNullable: false
          },
          {
            name: 'nome ente devedor',
            type: 'varchar',
            generationStrategy: 'increment',
            isNullable: false
          },
          {
            name: 'cpf ente devedor',
            type: 'varchar',
            generationStrategy: 'increment',
            isNullable: false
          }

        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('devedor')
  }
}
