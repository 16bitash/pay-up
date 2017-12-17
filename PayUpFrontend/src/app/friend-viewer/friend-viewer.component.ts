import {Component, OnInit} from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friend-viewer',
  templateUrl: './friend-viewer.component.html',
  styleUrls: ['./friend-viewer.component.css']
})
export class FriendViewerComponent implements OnInit {
  allFriends;

  constructor(private friendsService: FriendsService) {
  }

  ngOnInit() {
    this.initializeFriends();
  }

  initializeFriends() {
    this.friendsService.getAllFriends()
      .then(data => this.allFriends = data);
  }

  deleteFriend(target) {
    this.friendsService.deleteFriend(target.getAttribute('data-name'))
      .then(deletedFriend => this.initializeFriends());
  }

}
