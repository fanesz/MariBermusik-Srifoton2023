import { QuickDB } from "quick.db";

class Database {
  constructor(table) {
    this.table = table;
    this.db = new QuickDB();
    this.dbTable = this.db.table(this.table);
  }

  close() {
    this.db.close();
  }
}

export default Database;
