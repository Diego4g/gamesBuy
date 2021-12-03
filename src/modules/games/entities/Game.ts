import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../users/entities/User";

@Entity("games")
class Game {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    category: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => User, (user) => user.games)
    users: User[];

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Game }