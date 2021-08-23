import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateInvalidPayments1629496238037 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'InvalidPayments',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
              isPrimary: true
            },
            {
              name: 'idRemittance',
              type: 'varchar'
            },
            {
              name: 'idCreditor',
              type: 'varchar'
            },
            {
              name: 'idEnteDebtor',
              type: 'varchar'
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
              type: 'varchar'
            },
            {
              name: 'reason',
              type: 'varchar'
            }
          ]
        }
      )
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('InvalidPayments')
  }
}
