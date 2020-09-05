import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createDatabase1598969788858 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('database_todo', false);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('database_todo');
  }
}
