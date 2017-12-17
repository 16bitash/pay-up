import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FriendsService} from '../friends.service';
import {TransactionsService} from '../transactions.service';

@Component({
  selector: 'app-friend-editor',
  templateUrl: './friend-editor.component.html',
  styleUrls: ['./friend-editor.component.css'],
})
export class FriendEditorComponent implements OnInit {
  originalName;
  editedName;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private friendsService: FriendsService,
              private transactionsService: TransactionsService) {
  }

  ngOnInit() {
    // Promise not working
    this.route.paramMap
      .subscribe(params => {
        this.originalName = this.editedName = params.get('name');
      });
  }

  saveEdit() {
    Promise.all([
      this.friendsService.updateFriendName(this.originalName, this.editedName),
      this.transactionsService.updateTransactionsName(this.originalName, this.editedName)
    ])
      .then(() => this.location.back())
      .catch(() => alert('Sorry! Name couldn\'t be updated'));
  }

  calcelEdit() {
    this.location.back();
  }

}
