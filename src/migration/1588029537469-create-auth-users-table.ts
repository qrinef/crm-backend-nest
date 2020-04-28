import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAuthUsersTable1588029537469 implements MigrationInterface {
  name = 'createAuthUsersTable1588029537469';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "auth" ("id" SERIAL NOT NULL, "refreshToken" character varying NOT NULL, "refreshTokenExpiration" TIMESTAMP NOT NULL DEFAULT NOW() + INTERVAL '60 DAY', "userId" integer, CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "auth" ADD CONSTRAINT "FK_373ead146f110f04dad60848154" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth" DROP CONSTRAINT "FK_373ead146f110f04dad60848154"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "auth"`, undefined);
    await queryRunner.query(`DROP TABLE "users"`, undefined);
  }
}
