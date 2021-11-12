import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class payments1636652875104 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'payment',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'identificador remessas',
            type: 'varchar',
            generationStrategy: 'increment',
            isNullable: false
          },
          {
            name: 'cod_credor',
            type: 'varchar',
            generationStrategy: 'increment',
            isNullable: true
          },
          {
            name: 'cod_devedor',
            type: 'varchar',
            generationStrategy: 'increment',
            isNullable: true
          },
          {
            name: 'valor inicial',
            type: 'decimal(10,2)',
            generationStrategy: 'increment',
            isNullable: false
          },
          {
            name: 'valor final',
            type: 'decimal(10,2)',
            generationStrategy: 'increment',
            isNullable: false
          },
          {
            name: 'data',
            type: 'data',
            generationStrategy: 'increment',
            isNullable: false
          },
          {
            name: 'status remessa',
            type: 'varchar',
            generationStrategy: 'increment',
            isNullable: false
          },
          {
            name: 'motivo',
            type: 'varchar',
            generationStrategy: 'increment',
            isNullable: true
          }
        ]
      })
    )

    await queryRunner.createForeignKey(
      'payment',
      new TableForeignKey({
        name: 'Credor',
        columnNames: ['cod_credor'],
        referencedColumnNames: ['cod_credor'],
        referencedTableName: 'credor',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
    await queryRunner.createForeignKey(
      'DPayment',
      new TableForeignKey({
        name: 'Devedor',
        columnNames: ['cod_devedor'],
        referencedColumnNames: ['cod_devedor'],
        referencedTableName: 'devedor',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('payment')
  }
}
