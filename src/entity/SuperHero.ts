import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Power from "./Power";

@Entity()
export class SuperHero {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(() => Power, (power) => power.superHero, {eager: true, cascade: true})
    public power: Power[];

}

export default SuperHero;
