import { QuickDB } from "quick.db";

class Database {
  constructor(table) {
    if (!Database.instance) {
      const db = new QuickDB();
      this[table] = db.table(table);
      Database.instance = this;
    }

    return Database.instance[table];
  }
}

export default Database;