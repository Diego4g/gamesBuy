import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class UserGame1638573836017 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_games",
                columns: [
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "game_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            "users_games",
            new TableForeignKey({
                name: "FKUserGame",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )

        await queryRunner.createForeignKey(
            "users_games",
            new TableForeignKey({
                name: "FKGameUser",
                referencedTableName: "games",
                referencedColumnNames: ["id"],
                columnNames: ["game_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "users_games", "FKGameUser"
        );

        await queryRunner.dropForeignKey(
            "users_games", "FKUserGame"
        )

        await queryRunner.dropTable("users_games")

    }

}
