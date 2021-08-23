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
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'cnpj',
              type: 'varchar(18)'
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
