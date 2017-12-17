import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friend-transactions-viewer',
  templateUrl: './friend-transactions-viewer.component.html',
  styleUrls: ['./friend-transactions-viewer.component.css']
})
export class FriendTransactionsViewerComponent implements OnInit {
  friendName;
  friendTransactions;
  constructor(private transactiosnsService: TransactionsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.friendName = params.get('name');
      });
    this.initializeTransactions();
  }

  initializeTransactions() {
    this.transactiosnsService.getTransactionsByName(this.friendName)
      .then(transactions => this.friendTransactions = transactions);
  }

  deleteTransaction(id) {
    this.transactiosnsService.deleteTransactionById(id)
      .then(() => this.initializeTransactions());
  }

}
