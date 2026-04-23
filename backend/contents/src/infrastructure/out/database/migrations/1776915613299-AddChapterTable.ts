import { MigrationInterface, QueryRunner } from "typeorm";

export class AddChapterTable1776915613299 implements MigrationInterface {
    name = 'AddChapterTable1776915613299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chapter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "chapter_name" character varying NOT NULL, "relative_number" integer NOT NULL, "order" integer NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, "groupId" uuid, CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "FK_e1930adad68a109bd55de4b8880" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "FK_e1930adad68a109bd55de4b8880"`);
        await queryRunner.query(`DROP TABLE "chapter"`);
    }

}
