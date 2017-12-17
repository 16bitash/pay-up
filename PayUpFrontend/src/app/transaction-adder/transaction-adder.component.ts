import {Component, OnInit} from '@angular/core';
import {FriendsService} from '../friends.service';
import {TransactionsService} from '../transactions.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-transaction-adder',
  templateUrl: './transaction-adder.component.html',
  styleUrls: ['./transaction-adder.component.css']
})
export class TransactionAdderComponent implements OnInit {
  allFriends;

  constructor(private friendsService: FriendsService,
              private transactionsService: TransactionsService,
              private location: Location) {
  }

  ngOnInit() {
    this.initializeFriends();
  }

  initializeFriends() {
    this.friendsService.getAllFriends()
      .then(data => this.allFriends = data);
  }

  addTransaction(name, amount, type) {
    if (type === 'Lend') {
      amount *= -1;
    }
    this.transactionsService.addTransaction(name, amount)
      .then(() => this.location.back())
      .catch(() => alert('Sorry couldn\'t add transaction!'));
  }

  cancelAction() {
    this.location.back();
  }

}
