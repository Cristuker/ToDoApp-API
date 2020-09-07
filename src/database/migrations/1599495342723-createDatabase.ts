import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createDatabase1599495342723 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('database_todo', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('database_todo');
  }
}
