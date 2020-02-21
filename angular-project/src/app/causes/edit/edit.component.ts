import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CausesService } from 'src/app/shared/services/causes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  get cause() {
    return this.causesService.causes;
  }

  constructor(
    private causesService: CausesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.causesService.load(this.router.url.split('/')[3]);
    if (!this.cause)
      this.router.navigate(['/404'])
  }

  editCauseHandler(data){
    if(!data.title)
    data.title=this.cause['title'];
    if(!data.description)
    data.description=this.cause['description'];
    if(!data.imageUrl)
    data.imageUrl=this.cause['imageUrl'];
    this.causesService.edit(this.router.url.split('/')[3], this.cause['name'], data.title, data.description, data.imageUrl).subscribe(() => {
      this.router.navigate(['/cause'])
    });
    console.log(data)
  }

}
