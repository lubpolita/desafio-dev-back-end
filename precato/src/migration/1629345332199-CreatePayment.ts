import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreatePayment1629345332199 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'Payments',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
              isPrimary: true
            },
            {
              name: 'idCreditor',
              type: 'uuid'
            },
            {
              name: 'idEnteDebtor',
              type: 'uuid'
            },
            {
              name: 'initialValue',
              type: 'float'
            },
            {
              name: 'finalValue',
              type: 'float'
            },
            {
              name: 'data',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'status',
              type: 'varchar(50)'
            },
            {
              name: 'reason',
              type: 'varchar(50)',
              isNullable: true
            }
          ],
          foreignKeys: [
            {
              referencedTableName: 'Creditor',
              referencedColumnNames: ['id'],
              columnNames: ['idCreditor'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            },
            {
              referencedTableName: 'EnteDebtor',
              referencedColumnNames: ['id'],
              columnNames: ['idEnteDebtor'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            }
          ]
        }
      )
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Payments')
  }
}
