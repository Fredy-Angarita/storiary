import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGenreTitleRelation1776912785001 implements MigrationInterface {
    name = 'AddGenreTitleRelation1776912785001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "title-genre" ("titleId" uuid NOT NULL, "genreId" uuid NOT NULL, CONSTRAINT "PK_c882e3d2be48ebce81391b2f17b" PRIMARY KEY ("titleId", "genreId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d70b22c162f873b0664f50e728" ON "title-genre" ("titleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_988454f48a249855232d8ea1a5" ON "title-genre" ("genreId") `);
        await queryRunner.query(`ALTER TABLE "title-genre" ADD CONSTRAINT "FK_d70b22c162f873b0664f50e7281" FOREIGN KEY ("titleId") REFERENCES "title"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "title-genre" ADD CONSTRAINT "FK_988454f48a249855232d8ea1a5d" FOREIGN KEY ("genreId") REFERENCES "genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "title-genre" DROP CONSTRAINT "FK_988454f48a249855232d8ea1a5d"`);
        await queryRunner.query(`ALTER TABLE "title-genre" DROP CONSTRAINT "FK_d70b22c162f873b0664f50e7281"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_988454f48a249855232d8ea1a5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d70b22c162f873b0664f50e728"`);
        await queryRunner.query(`DROP TABLE "title-genre"`);
    }

}
