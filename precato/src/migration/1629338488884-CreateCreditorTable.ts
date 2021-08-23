import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCreditorTable1629338488884 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'Creditor',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
              isPrimary: true
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'cpf',
              type: 'varchar(14)'
            },
            {
              name: 'registerStatus',
              type: 'varchar'
            }
          ]
        }
      )
    )
  }

  // dropar tabelas
  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Creditor')
  }
}
