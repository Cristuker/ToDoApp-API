import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createUsersTable1599513096920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'password_hash',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
