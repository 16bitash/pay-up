import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends;
  friendsToAmount = {};
  friendsToTransaction = {};
  constructor(private friendsService: FriendsService, private transactionsService: TransactionsService) {
  }
  ngOnInit() {
    this.friendsService.getAllFriends()
      .then(data => {
        this.friends = data;
        this.initializeFriendsToAmount();
      });
  }
  initializeFriendsToAmount() {
    this.friends.forEach(friend => {
      this.transactionsService.getOutstandingBalance(friend.name)
        .then(outstandingAmount => this.friendsToAmount[friend.name] = outstandingAmount);
    });
  }
}
