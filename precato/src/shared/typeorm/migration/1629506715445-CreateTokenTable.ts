import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTokenTable1629506715445 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'Tokens',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
              isPrimary: true
            },
            {
              name: 'userId',
              type: 'uuid'
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'token',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        }
      )
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey('Token', 'fk_user')
    await queryRunner.dropTable('Tokens')
  }
}
