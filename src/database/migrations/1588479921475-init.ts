import {MigrationInterface, QueryRunner} from "typeorm";

export class init1588479921475 implements MigrationInterface {
    name = 'init1588479921475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "auth" ("id" SERIAL NOT NULL, "refreshToken" character varying NOT NULL, "refreshTokenExpiration" TIMESTAMP NOT NULL DEFAULT NOW() + INTERVAL '60 DAY', "userId" integer, CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "statuses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2fd3770acdb67736f1a3e3d5399" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "stages" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_16efa0f8f5386328944769b9e6d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" integer, "statusId" integer, "stageId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_373ead146f110f04dad60848154" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1457f286d91f271313fded23e53" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_37b50c6e3b13ecaf98e4306c2d7" FOREIGN KEY ("statusId") REFERENCES "statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_0e942116b9d234835bfec3754bd" FOREIGN KEY ("stageId") REFERENCES "stages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_0e942116b9d234835bfec3754bd"`, undefined);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_37b50c6e3b13ecaf98e4306c2d7"`, undefined);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1457f286d91f271313fded23e53"`, undefined);
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_373ead146f110f04dad60848154"`, undefined);
        await queryRunner.query(`DROP TABLE "orders"`, undefined);
        await queryRunner.query(`DROP TABLE "stages"`, undefined);
        await queryRunner.query(`DROP TABLE "statuses"`, undefined);
        await queryRunner.query(`DROP TABLE "clients"`, undefined);
        await queryRunner.query(`DROP TABLE "auth"`, undefined);
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
