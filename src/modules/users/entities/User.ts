import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"
import { Game } from "../../games/entities/Game";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    nickName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Game, (game) => game.users)
    @JoinTable()
    games: Game[];

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { User }