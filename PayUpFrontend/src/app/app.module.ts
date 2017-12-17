import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendViewerComponent } from './friend-viewer/friend-viewer.component';
import { TransactionsViewerComponent } from './transactions-viewer/transactions-viewer.component';

import { FriendsService } from './friends.service';
import { TransactionsService } from './transactions.service';

import { AppRoutingModule } from './app-routing.module';
import { FriendEditorComponent } from './friend-editor/friend-editor.component';
import { TransactionEditorComponent } from './transaction-editor/transaction-editor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FriendAdderComponent } from './friend-adder/friend-adder.component';
import { TransactionAdderComponent } from './transaction-adder/transaction-adder.component';
import { FriendTransactionsViewerComponent } from './friend-transactions-viewer/friend-transactions-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendViewerComponent,
    TransactionsViewerComponent,
    FriendEditorComponent,
    TransactionEditorComponent,
    NotFoundComponent,
    FriendAdderComponent,
    TransactionAdderComponent,
    FriendTransactionsViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    FriendsService,
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
