import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  isAdminDashRoute(): boolean {
    const currentRoute = this.route.snapshot.url.join('/');
    return currentRoute.includes('admin/dashboard');
  }

  getDetailLink(heroId: number): string[] {
    const currentRoute = this.router.url;
  
    if (currentRoute.includes('admin')) {
      return ['/admin/dashboard/detail', heroId.toString()];
    } else {
      return ['/client/dashboard/detail', heroId.toString()];
    }
  }
  

}
