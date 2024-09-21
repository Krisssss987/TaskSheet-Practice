import { Component } from '@angular/core';
import { BreadcrumbService } from './service/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  constructor(public breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void { }

}
