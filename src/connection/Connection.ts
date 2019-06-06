import {createConnection} from "typeorm";
import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";

export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port:  54320,
    username: "demo",
    password: "demo",
    database: "demo",
    entities: [
        SuperHero,
        Power
    ],
    synchronize: true,
    logging: false
});
