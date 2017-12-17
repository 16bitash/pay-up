import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class TransactionsService {

  constructor(private http: HttpClient) {
  }
  getAllTransactions() {
    return this.http.get('http://localhost:5252/transactions/all').toPromise();
  }
  getTransactionsByName(name) {
    return this.http.get('http://localhost:5252/transactions/name', {
      params: new HttpParams().set('name', name)
    }).toPromise();
  }
  getTransactionById(id) {
    return this.http.get('http://localhost:5252/transactions/id', {
      params: new HttpParams().set('id', id)
    }).toPromise();
  }
  getOutstandingBalance(name) {
    return new Promise(((resolve, reject) => {
      let outstandingBalance = 0;
      this.getTransactionsByName(name)
        .then((transactions: any[]) => {
          transactions.forEach(item => outstandingBalance += item.amount);
          resolve(outstandingBalance);
        });
    }));
  }
  addTransaction(name, amount) {
    return this.http.post('http://localhost:5252/transactions', {name: name, amount: amount}).toPromise();
  }
  updateTransactionAmount(id, amount) {
    return this.http.put('http://localhost:5252/transactions/id/' + id, {amount: amount}).toPromise();
  }
  updateTransactionsName(oldName, newName) {
    return this.http.put('http://localhost:5252/transactions/name/' + oldName, {name: newName}).toPromise();
  }
  deleteTransactionByName(name) {
    return this.http.delete('http://localhost:5252/transactions/name/' + name).toPromise();
  }
  deleteTransactionById(id) {
    return this.http.delete('http://localhost:5252/transactions/id/' + id).toPromise();
  }
}
