import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  authenticateHttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('userToken') });
  status: string;
  userInfo= JSON.parse(localStorage.getItem('UserInfo'));

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  deleteAccount(){
    this.http.delete(environment.SERVER_URL + 'api/profile/' + this.userInfo.site_id, { headers: this.authenticateHttpHeaders })
    .subscribe(() => this.status = 'Delete successful');
    localStorage.removeItem('userToken');
    window.location.reload()

  }

}
