import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTitleTable1776909079473 implements MigrationInterface {
    name = 'AddTitleTable1776909079473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "title" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, "typeId" uuid, CONSTRAINT "PK_30e6ea2dcc2aae4a4d1f5d9e183" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "title" ADD CONSTRAINT "FK_20fd40ffadc94db7fc6076794e5" FOREIGN KEY ("typeId") REFERENCES "title-type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "title" DROP CONSTRAINT "FK_20fd40ffadc94db7fc6076794e5"`);
        await queryRunner.query(`DROP TABLE "title"`);
    }

}
