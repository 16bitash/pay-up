import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {TransactionsService} from '../transactions.service';

@Component({
  selector: 'app-transaction-editor',
  templateUrl: './transaction-editor.component.html',
  styleUrls: ['./transaction-editor.component.css']
})
export class TransactionEditorComponent implements OnInit {
  transactionId;
  friendName;
  originalTransactionAmount;
  editedTransactionAmount;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private transactionService: TransactionsService) {
  }

  ngOnInit() {
    // Couldn't convert observable to promise
    this.route.paramMap.subscribe(params => {
      this.transactionId = params.get('id');
      this.transactionService.getTransactionById(this.transactionId)
        .then((transactionObject: any) => {
          this.friendName = transactionObject.name;
          this.originalTransactionAmount = this.editedTransactionAmount = transactionObject.amount;
        });
    });
  }

  saveEdit() {
    this.transactionService.updateTransactionAmount(this.transactionId, this.editedTransactionAmount)
      .then(() => this.location.back())
      .catch(() => alert('Sorry! Amount couldn\'t be updated'));
  }

  cancelEdit() {
    this.location.back();
  }

}
