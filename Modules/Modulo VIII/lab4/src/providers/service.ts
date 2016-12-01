import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class ProductService {

	db: SQLite; 
	constructor() {
		this.db = new SQLite();
	}

	openDatabase() { // código necesario para operar la base de datos
		return this.db.openDatabase({
			name: 'data.db',
			location: 'default' // es muy aconsejable dejar por defecto la ubicacion
		})
	}

createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS product(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        'type TEXT, ' +
        'quantity INTEGER, ' +
        'price TEXT, ' +
        'name TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let query = 'SELECT * FROM product';
    // dentro de las llaves se colocan los parametros, en la consulta
    // los parametros se representan con el signo pregunta '?'
    // y deben ir en el orden de aparición en la consulta
    return this.db.executeSql(query, []) 
      .then(response => {
        let products = [];
        // Siempre es necesario iterar sobre el resultado
        for (let index = 0; index < response.rows.length; index++) {
          products.push(response.rows.item(index));
        }
        return Promise.resolve(products);
      })
  }

  create(product: any){
    let query = 'INSERT INTO product(name) VALUES(?)';
    return this.db.executeSql(query, [product.name]);
  }

  update(product: any){
    let query = 'UPDATE product SET name=? WHERE id=?';
    return this.db.executeSql(query, [product.name, product.id]);
  }

}
