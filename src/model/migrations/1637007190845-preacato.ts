import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class devedores1637007190845 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'devedor',
        columns: [
          {
            name: 'idDevedor',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'nomeEnteDevedor',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'cnpjEnteDevedor',
            type: 'varchar',
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
