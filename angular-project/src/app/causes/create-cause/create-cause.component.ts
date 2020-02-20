import { Component, OnInit } from '@angular/core';
import { CausesService } from 'src/app/shared/services/causes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cause',
  templateUrl: './create-cause.component.html',
  styleUrls: ['./create-cause.component.css']
})
export class CreateCauseComponent implements OnInit {

  constructor(
    private causeService: CausesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createCauseHandler(cause){
    this.causeService.create(cause).subscribe(() =>{
      this.router.navigate(['cause'])
    })
  }

}
