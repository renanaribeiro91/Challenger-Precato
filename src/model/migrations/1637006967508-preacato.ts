import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class payment1637006967508 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'payment',
        columns: [
          {
            name: 'idRemessas',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'idCredor',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'idDevedor',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'valorInicial',
            type: 'decimal(10,2)',
            isNullable: false
          },
          {
            name: 'valorFinal',
            type: 'decimal(10,2)',
            isNullable: false
          },
          {
            name: 'data',
            type: 'timestamptz',
            isNullable: false
          },
          {
            name: 'statusRemessa',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'motivo',
            type: 'varchar',
            isNullable: true
          }
        ]
      })
    )

    await queryRunner.createForeignKey(
      'payment',
      new TableForeignKey({
        name: 'Credor',
        columnNames: ['idCredor'],
        referencedColumnNames: ['idCredor'],
        referencedTableName: 'credor',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
    await queryRunner.createForeignKey(
      'Payment',
      new TableForeignKey({
        name: 'Devedor',
        columnNames: ['IdDvedor'],
        referencedColumnNames: ['idDevedor'],
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
