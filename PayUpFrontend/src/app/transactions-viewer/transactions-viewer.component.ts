import {Component, OnInit} from '@angular/core';
import {TransactionsService} from '../transactions.service';

@Component({
  selector: 'app-transactions-viewer',
  templateUrl: './transactions-viewer.component.html',
  styleUrls: ['./transactions-viewer.component.css']
})
export class TransactionsViewerComponent implements OnInit {
  allTransactions;

  constructor(private transactionsService: TransactionsService) {
  }

  ngOnInit() {
    this.initializeAllTransactions();
  }

  initializeAllTransactions() {
    this.transactionsService.getAllTransactions()
      .then(data => this.allTransactions = data);
  }

  deleteTransaction(id) {
    this.transactionsService.deleteTransactionById(id)
      .then(() => this.initializeAllTransactions());
  }

}
