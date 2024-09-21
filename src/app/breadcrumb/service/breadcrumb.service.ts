import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.breadcrumbs = this.createBreadcrumbs(this.router.routerState.snapshot.root);
    });
  }

  private createBreadcrumbs(route: any, url: string = '', breadcrumbs: Breadcrumb[] = [], skipFirst: boolean = true): Breadcrumb[] {
    const children: any[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    const child = children[0];
    const routeURL: string = child.url.map((segment: { path: any; }) => segment.path).join('/');
    
    if (routeURL !== '') {
      url += `/${routeURL}`;
    }

    // Skip the first route if skipFirst is true
    if (!skipFirst) {
      breadcrumbs.push({
        label: child.data.breadcrumb,
        url: url
      });
    }

    return this.createBreadcrumbs(child, url, breadcrumbs, false);
  }
}
