import { createQueryBuilder, MigrationInterface, QueryRunner } from "typeorm";

export class CreateGame1638569299042 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(

            'CREATE TABLE "games"("id" uuid NOT NULL, "name" VARCHAR NOT NULL, "category" VARCHAR NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_Game" PRIMARY KEY ("id"))'
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "games" CASCADE')
    }

}
