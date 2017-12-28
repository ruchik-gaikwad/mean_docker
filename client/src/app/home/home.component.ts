import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpService ) { }

  users: any;
  ngOnInit() {
    this.http.getAllUsers()
    .subscribe(result => {
       this.users = result;

       console.log(result);
    })
  }

  onSubmit(value) {
    this.http.addUser(value).subscribe(result => {
      console.log(result)
      this.ngOnInit();

    })

  }

  selectedUser(user){
    console.log(user)
    this.http.deleteUser(user).subscribe(result=> {
      this.ngOnInit();
    })
  }
}
