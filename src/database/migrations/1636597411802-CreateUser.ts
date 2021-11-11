import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1636597411802 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "nickName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_User" PRIMARY KEY ("id"))'
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'DROP TABLE "users" CASCADE'
        )
    }
}
