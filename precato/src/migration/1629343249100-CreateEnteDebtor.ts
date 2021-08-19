import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateEnteDebtor1629343249100 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'EnteDebtor',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true
            },
            {
              name: 'name',
              type: 'varchar(100)'
            },
            {
              name: 'cnpj',
              type: 'varchar(14)'
            }
          ]
        }
      )
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('EnteDebtor')
  }
}
