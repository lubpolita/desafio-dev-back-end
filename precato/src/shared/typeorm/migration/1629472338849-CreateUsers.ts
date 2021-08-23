import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1629472338849 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'User',
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
              name: 'username',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'password',
              type: 'varchar'
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
    await queryRunner.dropTable('User')
  }
}
