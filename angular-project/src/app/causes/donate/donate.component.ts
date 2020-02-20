import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CausesService } from 'src/app/shared/services/causes.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  get cause() {
    return this.causesService.causes;
  }

  

  constructor(
    private activatedRoute: ActivatedRoute,
    private causesService: CausesService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.causesService.load(this.activatedRoute.snapshot.params.id);
    if(!this.cause || !this.userService.isLoged)
    this.router.navigate(['/404'])
  }

  donate(data){
    console.log(this.amount)
    console.log(data.donation);
  }

}
