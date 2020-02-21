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

  error: string = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private causesService: CausesService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.causesService.load(this.activatedRoute.snapshot.params.id)
    if (!this.cause || !this.userService.isLoged)
      this.router.navigate(['/404'])
  }

  donate(data) {
    const amount = Number(this.cause['amount']) + Number(data.donation);
    const value = data.donation;
    if (this.userService.currentUser.balance <= value)
      this.error = "You don`t have enough money!";

    else {
      this.causesService.donate(this.cause['_id'], amount, value).subscribe(() => {
        this.router.navigate(['/cause'])
        alert('Your donation is succesfull!')

      });
    }
  }

}
