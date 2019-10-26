import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../services/project.service';
import { Project } from '../../interfaces/project';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-page-portfolio',
  templateUrl: './page-portfolio.component.html',
  styleUrls: ['./page-portfolio.component.scss']
})
export class PagePortfolioComponent implements OnInit {
  projects: Project[];
  project;
  projectActive = 0;
  imageActive = 0;

  constructor(private projectsService: ProjectService) { }

  ngOnInit() {
    this.projectsService.getProjects()
      .pipe(first())
      .subscribe(projects => {
        this.projects = projects;
        this.project = projects[0];
      });
  }

  prevImage(): void {
    if (this.imageActive - 1 < 0) {
      this.imageActive = this.projects[this.projectActive].images.length - 1;
    } else {
      this.imageActive -= 1;
    }
  }

  nextImage(): void {
    if (this.imageActive + 1 === this.projects[this.projectActive].images.length) {
      this.imageActive = 0;
    } else {
      this.imageActive += 1;
    }
  }

}
