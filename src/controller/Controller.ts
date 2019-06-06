import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";

class Controller {

    constructor() {}


    public getAllSuperHero(req: Request, res: Response) {
        connection
            .then(async connection => {
                const superHeroes: SuperHero[] = await connection.manager.find(SuperHero);
                res.json(superHeroes);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public addSuperHero(req: Request, res: Response) {
        connection
            .then(async connection => {
                let requestSuperHero = req.body;
                let requestPower = requestSuperHero.power;

                let superHero = new SuperHero();
                superHero.name = requestSuperHero.name;
                superHero.power = [];

                requestPower.forEach(requestPower => {
                   let power: Power = new Power();
                   power.power = requestPower;
                   superHero.power.push(power);
                });

                await connection.manager.save(superHero);
                res.json({message: "Successfully Saved."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

}

export {Controller}
