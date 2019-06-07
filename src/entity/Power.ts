import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import SuperHero from "./SuperHero";

@Entity()
export class Power {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public ability: string;

    @ManyToOne(() => SuperHero, (superHero) => superHero.power)
    public superHero: SuperHero;

}

export default Power;
