import {Component, OnInit} from '@angular/core';
import {FriendsService} from '../friends.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-friend-adder',
  templateUrl: './friend-adder.component.html',
  styleUrls: ['./friend-adder.component.css']
})
export class FriendAdderComponent implements OnInit {

  constructor(private friendsService: FriendsService, private location: Location) {
  }

  ngOnInit() {
  }

  addFriend(name) {
    this.friendsService.addFriend(name)
      .then(() => this.location.back());
  }

  cancelAction() {
    this.location.back();
  }

}
