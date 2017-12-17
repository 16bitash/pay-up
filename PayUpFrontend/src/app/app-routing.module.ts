import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FriendViewerComponent } from './friend-viewer/friend-viewer.component';
import { FriendEditorComponent } from './friend-editor/friend-editor.component';
import { FriendAdderComponent } from './friend-adder/friend-adder.component';
import { FriendTransactionsViewerComponent } from './friend-transactions-viewer/friend-transactions-viewer.component';
import { TransactionsViewerComponent } from './transactions-viewer/transactions-viewer.component';
import { TransactionEditorComponent } from './transaction-editor/transaction-editor.component';
import { TransactionAdderComponent } from './transaction-adder/transaction-adder.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes = [
  { path: 'friend/:name', component: FriendEditorComponent },
  { path: 'friends', component: FriendViewerComponent },
  { path: 'addfriend', component: FriendAdderComponent },
  { path: 'transactions/name/:name', component: FriendTransactionsViewerComponent },
  { path: 'transaction/edit/:id', component: TransactionEditorComponent },
  { path: 'transactions', component: TransactionsViewerComponent },
  { path: 'addtransaction', component: TransactionAdderComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
