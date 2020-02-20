import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CausesService } from 'src/app/shared/services/causes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  get cause() {
    return this.causesService.causes;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private causesService: CausesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.causesService.load(this.activatedRoute.snapshot.params.id);
    if(!this.cause)
    this.router.navigate(['/404'])
  }

}
