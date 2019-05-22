import { Component, OnInit } from '@angular/core';
import { WishlistsService } from '../wishlists.service';
import { Wishlists } from '../wishlists';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlists',
  templateUrl: './wishlists.component.html',
  styleUrls: ['./wishlists.component.css']
})
export class WishlistsComponent implements OnInit {

  accessToken: string;
  userName: string;
  wishlistList: Wishlists[];

  constructor(private wishlistsService: WishlistsService,
    public router: Router) { }

  ngOnInit() {
    this.accessToken = localStorage.getItem('accessToken');
    if(this.accessToken){
      this.wishlistsService.getAllWishlists().subscribe(res =>{
        this.wishlistList = res;
        this.userName = this.wishlistList[1].createdBy;
        console.log(this.wishlistList);
      });
    } else {
      this.router.navigate(['']);
    }
  }

  onLogOut(){
    localStorage.clear();
  }

}
