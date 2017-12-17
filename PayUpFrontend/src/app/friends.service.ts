import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FriendsService {

  constructor(private http: HttpClient) {
  }
  getAllFriends() {
    return this.http.get('http://localhost:5252/friends/all').toPromise();
  }
  addFriend(name) {
    return this.http.post('http://localhost:5252/friends', {name: name}).toPromise();
  }
  updateFriendName(oldName, newName) {
    return this.http.put('http://localhost:5252/friends/' + oldName, {name: newName}).toPromise();
  }
  deleteFriend(name) {
    return this.http.delete('http://localhost:5252/friends/' + name).toPromise();
  }
}
