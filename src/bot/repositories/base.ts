import { db } from "../../database/database";

export class Repository {
    db: typeof db;

    constructor(database: typeof db) {
        this.db = database;
    }
}
