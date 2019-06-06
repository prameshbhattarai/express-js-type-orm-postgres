import {connection} from "./connection/Connection";
import SuperHero from "./entity/SuperHero";
import Power from "./entity/Power";

connection
    .then(async connection => {
       const superHero = new SuperHero();
       superHero.name = "Doga";

       const flyPower = new Power();
       flyPower.power = "fly";

       const runPower = new Power();
       runPower.power = "run";

       superHero.power = [flyPower, runPower];
       const saved = await connection.manager.save(superHero);
    })
    .catch(error => {
        console.error("Error ", error);
    });

connection
    .then(async connection => {
        const superHeroes: SuperHero[] = await connection.manager.find(SuperHero);
        superHeroes.forEach(superHero => {
            console.log("Super hero :" + superHero.name);
            console.log("Powers....");
            superHero.power.forEach(power => {
                console.log(power);
            })
        })
    })
    .catch(error => {
        console.error("Error ", error);
    });
