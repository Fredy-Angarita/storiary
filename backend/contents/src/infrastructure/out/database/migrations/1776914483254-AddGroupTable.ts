import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGroupTable1776914483254 implements MigrationInterface {
    name = 'AddGroupTable1776914483254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "group" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "group_name" character varying NOT NULL, "description" character varying NOT NULL, "order" integer NOT NULL, "total_chapters" integer NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, "titleId" uuid, "typeId" uuid, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_56fed0ab81ba8f7ca41d8dcd121" FOREIGN KEY ("titleId") REFERENCES "title"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_4c8e5fb303da3b6e4a05c7bb62b" FOREIGN KEY ("typeId") REFERENCES "group-type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_4c8e5fb303da3b6e4a05c7bb62b"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_56fed0ab81ba8f7ca41d8dcd121"`);
        await queryRunner.query(`DROP TABLE "group"`);
    }

}
